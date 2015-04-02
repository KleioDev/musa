/**
 * Created by cesarcruz on 3/30/15.
 */

var middleware = require('../middleware'),
    Router = require('koa-router'),
    koaBody = require('koa-better-body')();

/**
 * Handle requests related to Feedback
 * @returns {*}
 */
module.exports = function(){

    var loadModels = middleware.loadModel();

    var feedbackController = new Router()

        .post('/feedback', koaBody, loadModels, create);

    return feedbackController.routes();

}

/**
 * Submit Feedback information
 * Payload : {
 *  title : String with the title
 *  message : String with the feedback message
 *  type : String with the feedback type, could be bug, general or content_issue
 * }
 */
function *create(){
    //x-www-form-urlencoded
    var feedback = this.request.body.fields,
        result;

    if(!feedback){
        this.throw('Bad Request', 400);
    }

    try {
        result = yield this.models['Feedback'].create(feedback);
    } catch(err) {
        if(typeof err ==='ValidationError'){
            this.throw('Invalid Parameters', 400);
        } else {
            this.throw(err.message, err.status || 500);
        }
    }

    if(!result){
        this.throw('Not Found', 404);
    }

    this.status = 200;

    this.body = result;

}