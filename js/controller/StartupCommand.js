/**
* @author Saad Shams :: saad@muizz.com and Daniel Puig :: dpuigerarde@gmail.com
* Commands resides in the controller section of the system, and are used are for
* system wide operations, like system startup, retrieving a proxy, fetching data, 
* and passing on to View Tier (Mediators/Components) for display of data. 
* Commands are instantiated on the notification and execute function gets called.
* */

puremvc.define(
{
    name: "controller.StartupCommand",
    parent: puremvc.SimpleCommand
},
{
     /**
     * @param {Object} notification
     * Instance created and execute function called upon Startup Notification
	 * TagComponents are instaniated, view.components.Scroller and view.components.Menu
	 * Registers Mediators ScrollerMediator and MenuMediator for these TagComponents
	 * Any dispatch of custom events that requires change in the other part of the system,
	 * are handled by their respective mediators. That's the main core of the system.
     */
    
    execute: function(notification) {
	    this.facade.registerProxy(new model.Moodle());
	    this.facade.registerProxy(new model.InitProxy());

	    
	    this.facade.registerProxy(new model.QuestionAttemptStepDataProxy());
	    this.facade.registerProxy(new model.QuestionAttemptStepsProxy());
	    this.facade.registerProxy(new model.QuestionAttemptsProxy());
	    this.facade.registerProxy(new model.QuestionCalculatedProxy());
	    this.facade.registerProxy(new model.QuestionCalculatedOptionsProxy());
	    this.facade.registerProxy(new model.QuestionCategoriesProxy());
	    this.facade.registerProxy(new model.QuestionDatasetDefinitionsProxy());
	    this.facade.registerProxy(new model.QuestionDatasetItemsProxy());
	    this.facade.registerProxy(new model.QuestionHintsProxy());
	    this.facade.registerProxy(new model.QuestionMultianswerProxy());
	    this.facade.registerProxy(new model.QuestionMultichoiceProxy());
	    this.facade.registerProxy(new model.QuestionNumericalProxy());
	    this.facade.registerProxy(new model.QuestionNumericalOptionsProxy());
	    this.facade.registerProxy(new model.QuestionNumericalUnitsProxy());
	    this.facade.registerProxy(new model.QuestionRandomsamatchProxy());
	    this.facade.registerProxy(new model.QuestionSessionsProxy());
	    this.facade.registerProxy(new model.QuestionStatesProxy());
	    this.facade.registerProxy(new model.QuestionTruefalseProxy());
	    this.facade.registerProxy(new model.QuestionUsagesProxy());
	    this.facade.registerProxy(new model.QuizProxy());
	    


	    var questionAttemptStepDataProxy = this.facade.retrieveProxy(model.QuestionAttemptStepDataProxy.NAME),
            questionAttemptStepsProxy = this.facade.retrieveProxy(model.QuestionAttemptStepsProxy.NAME),
            questionAttemptsProxy = this.facade.retrieveProxy(model.QuestionAttemptsProxy.NAME),
            questionCalculatedProxy = this.facade.retrieveProxy(model.QuestionCalculatedProxy.NAME),
            questionCalculatedOptionsProxy = this.facade.retrieveProxy(model.QuestionCalculatedOptionsProxy.NAME),
            questionCategoriesProxy = this.facade.retrieveProxy(model.QuestionCategoriesProxy.NAME),
            questionDatasetDefinitionsProxy = this.facade.retrieveProxy(model.QuestionDatasetDefinitionsProxy.NAME),
            questionDatasetItemsProxy = this.facade.retrieveProxy(model.QuestionDatasetItemsProxy.NAME),
            questionHintsProxy = this.facade.retrieveProxy(model.QuestionHintsProxy.NAME),
            questionMultianswerProxy = this.facade.retrieveProxy(model.QuestionMultianswerProxy.NAME),
            questionMultichoiceProxy = this.facade.retrieveProxy(model.QuestionMultichoiceProxy.NAME),
            questionNumericalProxy = this.facade.retrieveProxy(model.QuestionNumericalProxy.NAME),
            questionNumericalOptionsProxy = this.facade.retrieveProxy(model.QuestionNumericalOptionsProxy.NAME)
            questionNumericalUnitsProxy = this.facade.retrieveProxy(model.QuestionNumericalUnitsProxy.NAME),
	        questionRandomsamatchProxy = this.facade.retrieveProxy(model.QuestionRandomsamatchProxy.NAME),
	        questionSessionsProxy = this.facade.retrieveProxy(model.QuestionSessionsProxy.NAME),
	        questionStatesProxy = this.facade.retrieveProxy(model.QuestionStatesProxy.NAME),
        	questionTruefalseProxy = this.facade.retrieveProxy(model.QuestionTruefalseProxy.NAME),
        	questionUsagesProxy = this.facade.retrieveProxy(model.QuestionUsagesProxy.NAME),
        	quizProxy = this.facade.retrieveProxy(model.QuizProxy.NAME);

        	var qjson = '{"quizVO":{"id":"1","course":"2","name":"5th Grade Book 1 Quiz 1","intro":"","introformat":"1","timeopen":"0","timeclose":"0","timelimit":"0","overduehandling":"autoabandon","graceperiod":"0","preferredbehaviour":"deferredfeedback","attempts":"0","attemptonlast":"0","grademethod":"1","decimalpoints":"2","questiondecimalpoints":"-1","reviewattempt":"69904","reviewcorrectness":"4368","reviewmarks":"4368","reviewspecificfeedback":"4368","reviewgeneralfeedback":"4368","reviewrightanswer":"4368","reviewoverallfeedback":"4368","questionsperpage":"1","navmethod":"free","shufflequestions":"0","shuffleanswers":"1","questions":"1,2,0","sumgrades":"2.00000","grade":"10.00000","timecreated":"0","timemodified":"1379609177","password":"","subnet":"","browsersecurity":"-","delay1":"0","delay2":"0","showuserpicture":"0","showblocks":"0",' + 
	        			   '"quizQuestionInstancesVOs":[' + 
	        			     '{"id":"1","quiz":"1","question":"1","grade":"1.0000000",' +
				            	'"questionVO":{"id":"1","category":"2","parent":"0","name":"essay question","questiontext":"<p>write an essay on<\/p>","questiontextformat":"1","generalfeedback":"","generalfeedbackformat":"1","defaultmark":"1.0000000","penalty":"0.0000000","qtype":"essay","length":"1","stamp":"localhost+131024181729+qukJsv","version":"localhost+131024181730+AlnGMS","hidden":"0","timecreated":"1382638649","timemodified":"1382638649","createdby":"2","modifiedby":"2",' +
				              		'"questionAnswersVOs":[],"questionsummary":"write an essay on","_order":"","essay":true}},' +
						     '{"id":"2","quiz":"1","question":"2","grade":"1.0000000",' +
								'"questionVO":{"id":"2","category":"2","parent":"0","name":"true false","questiontext":"<p>capital of italy is rome?<\/p>","questiontextformat":"1","generalfeedback":"","generalfeedbackformat":"1","defaultmark":"1.0000000","penalty":"1.0000000","qtype":"truefalse","length":"1","stamp":"localhost+131024181759+CQercr","version":"localhost+131024181759+NvbNIZ","hidden":"0","timecreated":"1382638679","timemodified":"1382638679","createdby":"2","modifiedby":"2",' +
									'"questionAnswersVOs":['+
										'{"id":"1","question":"2","answer":"True","answerformat":"0","fraction":"1.0000000","feedback":"","feedbackformat":"1"},'+
										'{"id":"2","question":"2","answer":"False","answerformat":"0","fraction":"0.0000000","feedback":"","feedbackformat":"1"}'+
									'],"questionsummary":"capital of italy is rome?","_order":"","truefalse":true}}]}}';

			//quizProxy.insert(JSON.parse(qjson).quizVO);
    }
}
);
