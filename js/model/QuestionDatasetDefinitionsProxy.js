
puremvc.define(
{
    name: 'model.QuestionDatasetDefinitionsProxy',
    parent: puremvc.Proxy,

    constructor: function () {
        puremvc.Proxy.call(this, this.constructor.NAME, null);
    }
},
{
    database: null,

    onRegister: function (id, success, fail) {
        this.database = model.Moodle.getConnection();
    },
    
    select: function (id, success, fail) {
        var insertSQL = "SELECT * FROM question_dataset_definitions WHERE id = ?";
        var value = id;
        this.database.readTransaction(function (t) {
            t.executeSql(insertSQL, [value], success, fail);
        });
    },

    insert: function (questiondatasetdefinitionsVO, success, fail) {
        var insertSQL = 'INSERT INTO question_dataset_definitions (category, name, type, options, itemcount)' +
                        'VALUES (?,?,?,?,?)';
        var values = [questiondatasetdefinitionsVO.category, questiondatasetdefinitionsVO.name, questiondatasetdefinitionsVO.type,
                      questiondatasetdefinitionsVO.options, questiondatasetdefinitionsVO.itemcount];
        this.database.transaction(function (t) {
            t.executeSql(insertSQL, values, success, fail);
        });
    }
},
{
    NAME: 'QuestionDatasetDefinitionsProxy'
}
);