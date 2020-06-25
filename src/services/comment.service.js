import db from '../database/models';
import Queries from './Queries';
import response from '../helpers/response.helper';
import Paginate from '../helpers/paginate.helper';

/**
 * This class will provide all service ralated
 * with comment
 */
class CommentServices {
  /**
    * This method will help to create
    * a comment
    * @param { Object } req request data
    * @param { Object } res response
    * @param {String} subjectType subjectId
    * @returns {array} data that was created
    */
  static async createComment(req, res, subjectType) {
    const body = {
      subjectId: req.params.subjectID,
      subjectType,
      commentorId: req.user.id,
      comment: req.body.comment,
    };
    const data = await Queries.create(db.comment, body);

    if (subjectType === 'trip request') return data;

    return response.successMessage(res, 'comment created successfuly', 201, data);
  }

  /**
   * This method will help to search all comments
   * @param {object} req request
   * @param { Object } res response
   * @param { Object } subjectType response
   * @returns { Object } all information needed
   */
  static async getAllCommets(req, res, subjectType) {
    const subjectId = req.params.subjectID;
    const { page, limit } = req.query;
    const limitNumber = (/[0-9]/g.test(limit)) ? limit : 10;
    const offset = Paginate(page, limitNumber);
    const results = await Queries.commentsPaginationSearch(db.comment, { subjectId, subjectType }, limitNumber, offset);
    if (results.rows.length > 0) {
      return response.successMessage(res, 'success', 200, results);
    }
    return response.errorMessage(res, 'No comment yet', 204);
  }

  /**
    * This servise delete a comment
    * @param {Object} req request
    * @param {Object} res response
    * @returns { Object } user response as object
    */
  static async deleteComment(req, res) {
    const id = parseInt(req.params.commentID, 10);
    const subjectId = req.params.subjectID;
    await Queries.deleteComment(db.comment, { subjectId, id });
    return response.successMessage(res, 'Comment has been successfuly deleted', 200);
  }
}

export default CommentServices;
