puremvc.define(
{
    name: 'model.Moodle',
    parent: puremvc.Proxy
},
{
    
},
{
    NAME: 'Moodle',

    getConnection: function(){
        try {
            if(window.openDatabase) {
               return window.openDatabase('Moodle', '1.0', 'moodle', 10 * 1024 * 1024);
            } else if(openDatabase) {
                return openDatabase('Moodle', '1.0', 'moodle', 10 * 1024 * 1024);
            } else {
                return undefined;
            } 
        } catch(e) {
            return undefined;
        }
    }

}
);
