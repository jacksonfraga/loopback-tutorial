module.exports = function(Category) {
    // Category.beforeRemote('create', function(ctx, modelInstance, next) {
    //     ctx.args.data.userId = ctx.req.accessToken.userId;
    //     next();
    // });
    
    Category.greet = function(msg, cb) {
        cb(null, 'Greetings... ' + msg);
    }

    Category.remoteMethod(
        'greet',
        {
            accepts: { arg: 'msg', type: 'string' },
            returns: { arg: 'greeting', type: 'string' }
        }
    );    
};
