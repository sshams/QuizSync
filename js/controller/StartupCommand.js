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
	    this.facade.registerProxy(new model.QuestionProxy());
	    this.facade.registerProxy(new model.QuestionAnswersProxy());
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
	    this.facade.registerProxy(new model.QuizQuestionInstancesProxy());


	    var questionProxy = this.facade.retrieveProxy(model.QuestionProxy.NAME),
            questionAnswersProxy = this.facade.retrieveProxy(model.QuestionAnswersProxy.NAME),
            questionAttemptStepDataProxy = this.facade.retrieveProxy(model.QuestionAttemptStepDataProxy.NAME),
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
        	quizProxy = this.facade.retrieveProxy(model.QuizProxy.NAME),
        	quizQuestionInstancesProxy = this.facade.retrieveProxy(model.QuizQuestionInstancesProxy.NAME);        	
    }
}
);
