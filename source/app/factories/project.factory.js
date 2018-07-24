
'use strict';

angular

    .module('app')

    .factory('projectFactory', function() {

        function Project(project) {
            // this.id = project.id;
            // this.name = project.name;
            // this.description = project.description;
            // this.technologies = project.technologies;
            // this.tags = project.tags;
            // this.previewFirst = project.previewFirst;
            // this.platforms = [];
            // if(project.platforms.length > 0) {
            //     for(var pl in project.platforms) {
            //         this.platforms.push(project.platforms[pl]);
            //     }
            // }
            angular.extend(this, project);
        }

        return Project;
    });


// (function normalizeInput(projects) {
//     if(projects.length != 0) {
//         //check is there are any projects?
//         for(var i in projects) {
//             projects[i].currPlatform = {}; //will be set as selected by default platform to preview
//             if(projects[i].tags.indexOf('web') != -1)
//                 vm.webProjectsCount++;
//             if(projects[i].tags.indexOf('obile') != -1)
//                 vm.mobileProjectsCount++;
//
//             if(projects[i].platforms.length != 0) {
//                 //check is there are any platforms? and if it is -> setting the first as currPlatform
//                 for(var n in projects[i].platforms) {
//                     projects[i].platforms[n].currImg = ''; //will be shown on the device screen
//
//                     if((projects[i].platforms[n].images.length != 0)&&(projects[i].platforms[n].frame.length!=0)) { ///??
//                         //check is there are any images + frames? and if it is -> setting the first as currImg
//                         projects[i].platforms[n].currImg = projects[i].platforms[n].images[0];
//                     }
//                     else if(projects[i].platforms[n].frame.length==0) { ///??
//                         projects[i].platforms[n].frame = null;
//                     }
//                     else {
//                         //ELSE currImg = null
//                         projects[i].platforms[n].currImg = null;
//                     }
//                 }
//
//                 projects[i].currPlatform = projects[i].platforms[0];
//             }
//             else {
//                 //ELSE currPlatform = null
//                 projects[i].currPlatform = null;
//             }
//         }
//     }
//     else {
//         //and if it isn't -> setting project = null
//         projects = null;
//     }
// })(projects);
