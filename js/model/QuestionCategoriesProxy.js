
puremvc.define(
{
    name: 'model.QuestionCategoriesProxy',
    parent: puremvc.Proxy,

    constructor: function () {
        puremvc.Proxy.call(this, this.constructor.NAME, null);
    }
},
{
    database: null,

    onRegister: function (id, success, fail) {
        this.database = model.Moodle.getMoodle();
    },
    
    select: function (id, success, fail) {
        var insertSQL = "SELECT * FROM question_categories WHERE id = ?";
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [id], success, fail);
        });
    },

    insert: function (questioncategoriesVO, success, fail) {
        var insertSQL = 'INSERT INTO question_categories (name, contextid, info, infoformat, stamp, parent, sortorder)' +
                        'VALUES (?,?,?,?,?,?,?)';
        var values = [questioncategoriesVO.name, questioncategoriesVO.contextid, questioncategoriesVO.info,
                      questioncategoriesVO.infoformat, questioncategoriesVO.stamp, questioncategoriesVO.parent,
                      questioncategoriesVO.sortorder];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionCategoriesProxy'
}
);