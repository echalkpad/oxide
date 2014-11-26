import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

    actions: {
        sessionInvalidationSucceeded: function () {
            // Force reload to empty all cached data
            window.location = 'http://' + document.location.host;
        },

        toggleSidebar: function () {
            var slideOut = ($('#sidebar-container').css('left') !== '-250px') ? true : false;

            if (slideOut === true) {
                $('#sidebar-container').animate({
                   left: '-250px'
                }, { duration: 200, queue: false });
                $('#main-content').animate({
                   marginLeft: '0px',
                   marginRight: '0px',
                }, { duration: 200, queue: false });
                $('#navbar').animate({
                   marginLeft: '0px'
                }, { duration: 200, queue: false });
            } else {
                $('#sidebar-container').animate({
                   left: '0px'
                }, { duration: 200, queue: false });
                $('#main-content').animate({
                   marginLeft: '250px',
                   marginRight: '-250px',
                }, { duration: 200, queue: false });
                $('#navbar').animate({
                   marginLeft: '250px'
                }, { duration: 200, queue: false });
            }
        }
    }
});
