
puremvc.define(
{
    name: 'model.InitProxy',
    parent: puremvc.Proxy,
    
    constructor: function(){
        puremvc.Proxy.call(this, this.constructor.NAME, null);
    }
},
{
	onRegister: function() {
	    this.database = model.Moodle.getConnection();
		this.Question();
		this.QuestionAnswers();
		this.QuestionAttemptStepData();
		this.QuestionAttemptSteps();
		this.QuestionAttempts();
		this.QuestionCalculated();
		this.QuestionCalculatedOptions();
		this.QuestionCategories();
		this.QuestionDatasetDefinitions();
		this.QuestionDatasetItems();
		this.QuestionHints();
		this.QuestionMultianswer();
		this.QuestionMultichoice();
		this.QuestionNumerical();
		this.QuestionNumericalOptions();
		this.QuestionNumericalUnits();
		this.QuestionRandomsamatch();
		this.QuestionSessions();
		this.QuestionStates();
		this.QuestionTruefalse();
		this.QuestionUsages();
		this.Quiz();
        this.QuizQuestionInstances();

	},
    /*Start*/
    Question: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'category INTEGER NOT NULL DEFAULT 0,' +
                            'parent INTEGER  NOT NULL DEFAULT 0,' +
                            'name TEXT NOT NULL DEFAULT "",' +
                            'questiontext LONGTEXT,' +
                            'questiontextformat INTEGER  NOT NULL DEFAULT 0,' +
                            'generalfeedback LONGTEXT,' +
                            'generalfeedbackformat INTEGER  NOT NULL DEFAULT 0,' +
                            'defaultmark NUMERIC NOT NULL DEFAULT 1.0000000,' +
                            'penalty NUMERIC NOT NULL DEFAULT 0.3333333,' +
                            'qtype TEXT NOT NULL DEFAULT "",' +
                            'length INTEGER NOT NULL DEFAULT 1,' +
                            'stamp TEXT  NOT NULL DEFAULT "",' +
                            'version TEXT  NOT NULL DEFAULT "",' +
                            'hidden INTEGER NOT NULL DEFAULT 0,' +
                            'timecreated INTEGER NOT NULL DEFAULT 0,' +
                            'timemodified INTEGER  NOT NULL DEFAULT 0,' +
                            'createdby INTEGER DEFAULT NULL,' +
                            'modifiedby INTEGER DEFAULT NULL' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question: ' + e.message);
                });
            });
        }
    },

    QuestionAnswers: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_answers (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'question INTEGER NOT NULL DEFAULT 0,' +
                            'answer LONGTEXT  NOT NULL,' +
                            'answerformat INTEGER  NOT NULL DEFAULT 0,' +
                            'fraction NUMERIC  NOT NULL DEFAULT 0.0000000,' +
                            'feedback LONGTEXT  NOT NULL,' +
                            'feedbackformat INTEGER  NOT NULL DEFAULT 0' +')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_answers: ' + e.message);
                });
            });
        }
    },

    QuestionAttemptStepData: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_attempt_step_data (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'attemptstepid INTEGER NOT NULL,' +
                            'name TEXT  NOT NULL,' + 
                            'value TEXT' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_attempt_step_data: ' + e.message);
                });
            });
        }
    },

    QuestionAttemptSteps: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_attempt_steps (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'questionattemptid INTEGER NOT NULL,' +
                            'sequencenumber INTEGER NOT NULL,' +
                            'state TEXT NOT NULL,' +
                            'fraction NUMBER,' +
                            'timecreated INTEGER NOT NULL,' +
                            'userid INTEGER' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_attempt_steps: ' + e.message);
                });
            });
        }
    },

    QuestionAttempts: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_attempts (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'questionusageid INTEGER NOT NULL,' +
                            'slot INTEGER NOT NULL,' +
                            'behaviour TEXT NOT NULL,' +
                            'questionid INTEGER NOT NULL,' +
                            'variant INTEGER NOT NULL DEFAULT 1,' +
                            'maxmark NUMBER NOT NULL,' +
                            'minfraction NUMBER NOT NULL,' +
                            'flagged INTEGER NOT NULL DEFAULT 1,' +
                            'questionsummary LONGTEXT,' +
                            'rightanswer LONGTEXT,' +
                            'responsesummary LONGTEXT,' +
                            'timemodified INTEGER NOT NULL' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_attempts: ' + e.message);
                });
            });
        }
    },

    QuestionCalculated: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_calculated (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'question INTEGER NOT NULL DEFAULT 0,' +
                            'answer INTEGER NOT NULL DEFAULT 0,' +
                            'tolerance NUMERIC NOT NULL DEFAULT 0.0,' +
                            'tolerancetype INTEGER NOT NULL DEFAULT 1,' +
                            'correctanswerlength INTEGER NOT NULL DEFAULT 2,' +
                            'correctanswerformat INTEGER NOT NULL DEFAULT 2' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_calculated: ' + e.message);
                });
            });
        }
    },

    QuestionCalculatedOptions: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_calculated_options (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'question INTEGER NOT NULL DEFAULT 0,' +
                            'synchronize INTEGER NOT NULL DEFAULT 0,' +
                            'single INTEGER NOT NULL DEFAULT 0,' +
                            'shuffleanswers INTEGER NOT NULL DEFAULT 0,' +
                            'correctfeedback LONGTEXT,' +
                            'correctfeedbackformat INTEGER NOT NULL DEFAULT 0,' +
                            'partiallycorrectfeedback LONGTEXT,' +
                            'partiallycorrectfeedbackformat INTEGER NOT NULL DEFAULT 0,' +
                            'incorrectfeedback LONGTEXT,' +
                            'incorrectfeedbackformat INTEGER NOT NULL DEFAULT 0,' +
                            'answernumbering TEXT NOT NULL,' +
                            'shownumcorrect INTEGER NOT NULL DEFAULT 0' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_calculated_options: ' + e.message);
                });
            });
        }
    },

    QuestionCategories: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_categories (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'name TEXT NOT NULL,' +
                            'contextid INTEGER NOT NULL DEFAULT 0,' +
                            'info LONGTEXT NOT NULL,' +
                            'infoformat INTEGER NOT NULL DEFAULT 0,' +
                            'stamp TEXT NOT NULL,' +
                            'parent INTEGER NOT NULL DEFAULT 0,' +
                            'sortorder INTEGER NOT NULL DEFAULT 999' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_categories: ' + e.message);
                });
            });
        }
    },

    QuestionDatasetDefinitions: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_dataset_definitions (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'category INTEGER NOT NULL DEFAULT 0,' +
                            'name TEXT NOT NULL,' +
                            'type INTEGER NOT NULL DEFAULT 0,' +
                            'options TEXT NOT NULL,' +
                            'itemcount INTEGER NOT NULL DEFAULT 0' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_dataset_definitions: ' + e.message);
                });
            });
        }
    },

    QuestionDatasetItems: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_dataset_items (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'definition INTEGER NOT NULL DEFAULT 0,' +
                            'itemnumber INTEGER NOT NULL DEFAULT 0,' +
                            'value TEXT NOT NULL' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_dataset_items: ' + e.message);
                });
            });
        }
    },

    QuestionHints: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_hints (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'questionid INTEGER NOT NULL,' +
                            'hint LONGTEXT NOT NULL,' +
                            'hintformat INTEGER NOT NULL DEFAULT 0,' +
                            'shownumcorrect INTEGER,' +
                            'clearwrong INTEGER,' +
                            'options TEXT'+ ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_hints: ' + e.message);
                });
            });
        }
    },

    QuestionMultianswer: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_multianswer (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'question INTEGER NOT NULL DEFAULT 0,' +
                            'sequence LONGTEXT NOT NULL' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_multianswer: ' + e.message);
                });
            });
        }
    },

    QuestionMultichoice: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_multichoice (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'question INTEGER NOT NULL DEFAULT 0,' +
                            'layout INTEGER NOT NULL DEFAULT 0,' +
                            'answers TEXT NOT NULL,' +
                            'single INTEGER NOT NULL DEFAULT 0,' +
                            'shuffleanswers INTEGER NOT NULL DEFAULT 1,' +
                            'correctfeedback LONGTEXT NOT NULL,' +
                            'correctfeedbackformat INTEGER NOT NULL DEFAULT 0,' +
                            'partiallycorrectfeedback LONGTEXT NOT NULL,' +
                            'partiallycorrectfeedbackformat INTEGER NOT NULL DEFAULT 0,' +
                            'incorrectfeedback LONGTEXT NOT NULL,' +
                            'incorrectfeedbackformat INTEGER NOT NULL DEFAULT 0,' +
                            'answernumbering LONGTEXT NOT NULL,' +
                            'shownumcorrect INTEGER NOT NULL DEFAULT 0' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_multichoice: ' + e.message);
                });
            });
        }
    },


    QuestionNumerical: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_numerical (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'question INTEGER NOT NULL DEFAULT 0,' +
                            'answer INTEGER NOT NULL DEFAULT 0,' +
                            'tolerance NUMERIC NOT NULL DEFAULT 0.0' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_numerical: ' + e.message);
                });
            });
        }
    },

    QuestionNumericalOptions: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_numerical_options (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'question INTEGER NOT NULL DEFAULT 0,' +
                            'showunits INTEGER NOT NULL DEFAULT 0,' +
                            'unitsleft INTEGER NOT NULL DEFAULT 0,' +
                            'unitgradingtype INTEGER NOT NULL DEFAULT 0,' +
                            'unitpenalty NUMERIC NOT NULL DEFAULT 0.1000000' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_numerical_options: ' + e.message);
                });
            });
        }
    },

    QuestionNumericalUnits: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_numerical_units (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'question INTEGER NOT NULL DEFAULT 0,' +
                            'multiplier NUMERIC NOT NULL DEFAULT 1.0,' +
                            'unit TEXT NOT NULL'  + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_numerical_units: ' + e.message);
                });
            });
        }
    },

    QuestionRandomsamatch: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_randomsamatch (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'question INTEGER NOT NULL DEFAULT 0,' +
                            'choose INTEGER  NOT NULL DEFAULT 4' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_randomsamatch: ' + e.message);
                });
            });
        }
    },

    QuestionSessions: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_sessions (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'attemptid INTEGER NOT NULL DEFAULT 0,' +
                            'questionid INTEGER NOT NULL DEFAULT 0,' +
                            'newest INTEGER NOT NULL DEFAULT 0,' +
                            'newgraded INTEGER NOT NULL DEFAULT 0,' +
                            'sumpenalty NUMERIC NOT NULL DEFAULT 1.0,' +
                            'manualcomment LONGTEXT NOT NULL,' +
                            'manualcommentformat INTEGER NOT NULL DEFAULT 0,' +
                            'flagged INTEGER NOT NULL DEFAULT 0' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_sessions: ' + e.message);
                });
            });
        }
    },

    QuestionStates: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_states (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'attempt INTEGER NOT NULL DEFAULT 0,' +
                            'question INTEGER NOT NULL DEFAULT 0,' +
                            'seq_number INTEGER NOT NULL DEFAULT 0,' +         
                            'answer LONGTEXT NOT NULL,' +
                            'timestamp INTEGER NOT NULL DEFAULT 0,' +
                            'event INTEGER NOT NULL DEFAULT 0,' +
                            'grade NUMERIC NOT NULL DEFAULT 0.0,' +
                            'raw_grade NUMERIC NOT NULL DEFAULT 0.0,' +
                            'penalty NUMERIC NOT NULL DEFAULT 0.0' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_states: ' + e.message);
                });
            });
        }
    },

    QuestionTruefalse: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_truefalse (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'question INTEGER NOT NULL DEFAULT 0,' +
                            'trueanswer INTEGER NOT NULL DEFAULT 0,' +
                            'falseanswer INTEGER NOT NULL DEFAULT 0' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_truefalse: ' + e.message);
                });
            });
        }
    },

    QuestionUsages: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS question_usages (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'contextid INTEGER NOT NULL,' +
                            'component TEXT NOT NULL,' +
                            'preferredbehaviour TEXT NOT NULL' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table question_usages: ' + e.message);
                });
            });
        }
    },

    Quiz: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS quiz (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'course INTEGER NOT NULL DEFAULT 0,' +
                            'name TEXT NOT NULL,' +
                            'intro TEXT NOT NULL,' +
                            'timeopen INTEGER NOT NULL DEFAULT 0,' +
                            'timeclose INTEGER NOT NULL DEFAULT 0,' +
                            'timelimit INTEGER NOT NULL DEFAULT 0,' +
                            'overduehandling TEXT NOT NULL,' +
                            'graceperiod INTEGER NOT NULL DEFAULT 0,' +
                            'preferredbehaviour TEXT NOT NULL,' +
                            'attempts INTEGER NOT NULL DEFAULT 0,' +
                            'attemptonlast INTEGER NOT NULL DEFAULT 0,' +
                            'grademethod INTEGER NOT NULL DEFAULT 1,' +
                            'decimalpoints INTEGER NOT NULL DEFAULT 2,' +
                            'questiondecimalpoints INTEGER NOT NULL DEFAULT -1,' +
                            'reviewattempt INTEGER NOT NULL DEFAULT 0,' +
                            'reviewcorrectness INTEGER NOT NULL DEFAULT 0,' +
                            'reviewmarks INTEGER NOT NULL DEFAULT 0,' +
                            'reviewspecificfeedback INTEGER NOT NULL DEFAULT 0,' +
                            'reviewgeneralfeedback INTEGER NOT NULL DEFAULT 0,' +
                            'reviewrightanswer INTEGER NOT NULL DEFAULT 0,' +
                            'reviewoverallfeedback INTEGER NOT NULL DEFAULT 0,' +
                            'questionsperpage INTEGER NOT NULL DEFAULT 0,' +
                            'navmethod TEXT NOT NULL DEFAULT "free",' +
                            'shufflequestions INTEGER NOT NULL DEFAULT 0,' +
                            'shuffleanswers INTEGER NOT NULL DEFAULT 0,' +
                            'questions INTEGER NOT NULL DEFAULT 0,' +
                            'sumgrades NUMERIC NOT NULL DEFAULT 0.0,' +
                            'grade NUMERIC NOT NULL DEFAULT 0.0,' +
                            'timecreated INTEGER NOT NULL DEFAULT 0,' +
                            'timemodified INTEGER NOT NULL DEFAULT 0,' +
                            'password TEXT NOT NULL,' +
                            'subnet TEXT NOT NULL,' +
                            'browsersecurity TEXT NOT NULL,' +
                            'delay1 INTEGER NOT NULL DEFAULT 0,' +
                            'delay2 INTEGER NOT NULL DEFAULT 0,' +
                            'showuserpicture INTEGER NOT NULL DEFAULT 0,' +
                            'showblocks INTEGER NOT NULL DEFAULT 0' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table quiz: ' + e.message);
                });
            });
        }
    },

    QuizQuestionInstances: function () {
        var createSQL = 'CREATE TABLE IF NOT EXISTS quiz_question_instances (' +
                            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                            'quiz INTEGER NOT NULL DEFAULT 0,' +
                            'question INTEGER NOT NULL DEFAULT 0,' + 
                            'grade NUMERIC NOT NULL DEFAULT 0.0' + ')';
        if (!this.database) {
            return undefined;
        } else {
            this.database.transaction(function (t) {
                t.executeSql(createSQL, [], function (t, r) { }, function (t, e) {
                    alert('fail create table quiz_question_instances: ' + e.message);
                });
            });
        }
    }

/*End*/
},
{
    NAME: 'InitProxy'

}
);