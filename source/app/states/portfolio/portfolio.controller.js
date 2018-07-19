'use strict';

angular

    .module('layout.portfolio')

    .controller('portfolioController', function ($scope, $timeout, $uibModal) {


        var vm = $scope.vm = {
            projects: [],
            totalProjectsCount: 0,
            webProjectsCount: 0,
            mobileProjectsCount: 0,
            filterBy: 'all',
            prevImg: prevImg,
            nextImg: nextImg,
            openModal: open
        };

        var projects = [
            {
                id: 0,
                name: 'Bitсoin Merchant System',
                description: 'Scalable and extremly secured bitcoin front office solution for cash exchange. Allows users to easily trade bitcoins for a number of foreign currencies. Modular architecture makes it easy to integrate the system with different crypto currency exchanges.',
                technologies: 'Java, Hibernate, Spring, Angular.JS, Bootstrap',
                tags: 'web, mobile',
                previewFirst: true,
                platforms: [
                    {
                        platform: 'desktop',
                        platformIcon: 'fa fa-desktop',
                        images: ['assets/images/portfolio/portfolio-project/desktop/bms1.jpg', 'assets/images/portfolio/portfolio-project/desktop/bms2.jpg', 'assets/images/portfolio/portfolio-project/desktop/bms3.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/desktop.png'
                    }
                ]
            },
            {
                id: 1,
                name: 'MultiKid',
                description: 'Multiplication table trainer for Kid\'s.' + 'The best way to learn multiplication table with fun and engaging way for children. Intended for the improvement and testing of children calculation skills.',
                technologies: 'Java, Android',
                tags: 'mobile',
                previewFirst: false,
                platforms: [
                    {
                        platform: 'mobile-v',
                        platformIcon: 'fa fa-mobile',
                        images: ['assets/images/portfolio/portfolio-project/mobile/mkid1.jpg', 'assets/images/portfolio/portfolio-project/mobile/mkid2.jpg', 'assets/images/portfolio/portfolio-project/mobile/mkid3.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/mobile-v.png'
                    }
                ]
            },
            {
                id: 2,
                name: 'DMS, Single Gateway for Enterprise Data',
                description: 'The platform provides a single gateway to all enterprise files, office documents, mails and calendars locally and from outside of a company network. All resources are securely exposed to iOS and Android mobile applications with respect to company\'s privacy policy and taking into account domain\'s settings for users and groups.',
                technologies: 'iOS, Android, Java, Spring, RabbitMQ, LDAP, JCIFS, Aspose',
                tags: 'web, mobile',
                previewFirst: true,
                platforms: [
                    {
                        platform: 'desktop',
                        platformIcon: 'fa fa-desktop',
                        images: ['assets/images/portfolio/portfolio-project/desktop/tzwadmin1.jpg', 'assets/images/portfolio/portfolio-project/desktop/tzwadmin2.jpg', 'assets/images/portfolio/portfolio-project/desktop/tzwadmin3.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/desktop.png'
                    },
                    {
                        platform: 'tablet',
                        platformIcon: 'fa fa-tablet',
                        images: ['assets/images/portfolio/portfolio-project/tablet/tz1.jpg', 'assets/images/portfolio/portfolio-project/tablet/tz2.jpg'],
                        active: false,
                        frame: 'assets/images/portfolio/devices/tablet.png'
                    },
                    {
                        platform: 'mobile-h',
                        platformIcon: 'fa fa-mobile',
                        images: ['assets/images/portfolio/portfolio-project/mobile/tz1.jpg', 'assets/images/portfolio/portfolio-project/mobile/tz2.jpg'],
                        active: false,
                        frame: 'assets/images/portfolio/devices/mobile-h.png'
                    }
                ]
            },
            {
                id: 3,
                name: 'Disclosure/financial reporting management system',
                description: 'This is a process-driven, collaborative solution that streamlines all of your regulatory disclosure and financial reporting by offering a flexible, easy-to-use XBRL solution that mitigates risk throughout the process, and ensures a single version of the truth, from creation to filing.',
                technologies: 'Java, Hibernate, Flex, .Net, Adobe LiveCycle, SharePoint',
                tags: 'web',
                previewFirst: true,
                platforms: [
                    {
                        platform: 'desktop',
                        platformIcon: 'fa fa-desktop',
                        images: ['assets/images/portfolio/projects/c1.jpg', 'assets/images/portfolio/projects/cc2.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/desktop.png'
                    }
                ]
            },
            {
                id: 4,
                name: 'Comparison Server',
                description: 'The product is designed to compare revisions of text documents in DOC, DOCX, XLS, XLSX, HTML formats. Content and text style are matters of comparison. The product functions are available either through web service or Web UI allowing user to manually choose files to compare. The comparison output represents a document with visually highlighted differences between two revisions of source document which can be saved in HTML or PDF formats.',
                technologies: 'Java, Apache POI, iText, Tika, PDFBox, Spring',
                tags: 'web',
                previewFirst: false,
                platforms: [
                    {
                        platform: 'desktop',
                        platformIcon: 'fa fa-desktop',
                        images: ['assets/images/portfolio/projects/cs_main_1.jpg', 'assets/images/portfolio/projects/cs.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/desktop.png'
                    },
                    {
                        platform: 'tablet',
                        platformIcon: 'fa fa-tablet',
                        images: ['assets/images/portfolio/projects/cs_main_1.jpg', 'assets/images/portfolio/projects/cs.jpg'],
                        active: false,
                        frame: 'assets/images/portfolio/devices/tablet.png'
                    },
                    {
                        platform: 'mobile-h',
                        platformIcon: 'fa fa-mobile',
                        images: ['assets/images/portfolio/projects/cs_main_1.jpg', 'assets/images/portfolio/projects/cs.jpg'],
                        active: false,
                        frame: 'assets/images/portfolio/devices/mobile-h.png'
                    }
                ]
            },
            {
                id: 5,
                name: 'AllAccess',
                description: 'The AllAccess provides users with a quick look at the status of their connection and main features as well as data usage, mobile hotspot settings, Wi-Fi finder (viewing available networks, viewing network details), connect lite (start a session, share a file, file view), services synchronization.' + 'AllAccess is the Mobile App (based on Android 3.0).',
                technologies: 'Flex, AIR, Android',
                tags: 'mobile',
                previewFirst: true,
                platforms: [
                    {
                        platform: 'tablet',
                        platformIcon: 'fa fa-tablet',
                        images: ['assets/images/portfolio/projects/aa.jpg', 'assets/images/portfolio/projects/aa2.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/tablet.png'
                    }
                ]
            },
            {
                id: 6,
                name: 'ShackTracker',
                description: 'ShackTracker provides an organized way to keep track of the progress of users home. Shacktracker keeps everything in one place, so user can always find important documents, e-mails, images, and receipts.' + 'It is one-stop shop for managing the whole process, from signing the papers to getting the keys, with the added bonus of informative tips at key homebuilding moments.',
                technologies: 'Java, Play, Scala, CSS',
                tags: 'web',
                previewFirst: false,
                platforms: [
                    {
                        platform: 'desktop',
                        platformIcon: 'fa fa-desktop',
                        images: ['assets/images/portfolio/portfolio-project/desktop/st1.jpg', 'assets/images/portfolio/portfolio-project/desktop/st2.jpg', 'assets/images/portfolio/portfolio-project/desktop/st3.jpg', 'assets/images/portfolio/portfolio-project/desktop/st4.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/desktop.png'
                    }
                ]
            },
            {
                id: 7,
                name: 'CodeFresh',
                description: 'Codefresh allows agile teams to collaborate effectively on any feature branch or pull request. With Codefresh, agile teams can find, isolate and resolve any issue immediately, spending no time on installation and configuration of complex environments.' + 'Codefresh leverages the latest Docker tools (compose, swarm, and machine) to deliver a productive developer experience while eliminating the typical disparity between local development and production environments.',
                technologies: 'HML5, NodeJS, Mongo, AngularJS, Orion, Docker/CentOS7',
                tags: 'web',
                previewFirst: true,
                platforms: [
                    {
                        platform: 'desktop',
                        platformIcon: 'fa fa-desktop',
                        images: ['assets/images/portfolio/portfolio-project/desktop/cf1.jpg', 'assets/images/portfolio/portfolio-project/desktop/cf2.jpg', 'assets/images/portfolio/portfolio-project/desktop/cf3.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/desktop.png'
                    }
                ]
            },
            {
                id: 8,
                name: 'WorldTV',
                description: 'This is a platform to collect, store, aggregate, share videos, create your own TV channel out of YouTube videos, broadcast live from your mobile phone',
                technologies: 'DHTML, CSS, JavaScript, PHP, Flex',
                tags: 'web',
                previewFirst: false,
                platforms: [
                    {
                        platform: 'desktop',
                        platformIcon: 'fa fa-desktop',
                        images: ['assets/images/portfolio/portfolio-project/tablet/wtv.jpg', 'assets/images/portfolio/portfolio-project/tablet/wtv2.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/desktop.png'
                    },
                    {
                        platform: 'tablet',
                        platformIcon: 'fa fa-tablet',
                        images: ['assets/images/portfolio/portfolio-project/tablet/wtv.jpg', 'assets/images/portfolio/portfolio-project/tablet/wtv2.jpg'],
                        active: false,
                        frame: 'assets/images/portfolio/devices/tablet.png'
                    }
                ]
            },
            {
                id: 9,
                name: 'Newsfinity',
                description: 'ScoopDragon Publishing Limited operates one of Europe’s largest sports news aggregation networks and the largest in the UK. We can put your blog or news website in front of up to 20 million monthly visitors, with guaranteed traffic from passionate fans that flows directly to target site',
                technologies: 'DHTML, CSS, JavaScript, PHP',
                tags: 'web, mobile',
                previewFirst: true,
                platforms: [
                    {
                        platform: 'desktop',
                        platformIcon: 'fa fa-desktop',
                        images: ['assets/images/portfolio/projects/NF1.jpg', 'assets/images/portfolio/projects/NF2.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/desktop.png'
                    },
                    {
                        platform: 'tablet',
                        platformIcon: 'fa fa-tablet',
                        images: ['assets/images/portfolio/projects/NF1.jpg', 'assets/images/portfolio/projects/NF2.jpg'],
                        active: false,
                        frame: 'assets/images/portfolio/devices/tablet.png'
                    },
                    {
                        platform: 'mobile-h',
                        platformIcon: 'fa fa-mobile',
                        images: ['assets/images/portfolio/portfolio-project/mobile/mun1.jpg', 'assets/images/portfolio/portfolio-project/mobile/mun2.jpg', 'assets/images/portfolio/portfolio-project/mobile/mun3.jpg', 'assets/images/portfolio/portfolio-project/mobile/mun4.jpg'],
                        active: false,
                        frame: 'assets/images/portfolio/devices/mobile-h.png'
                    }
                ]
            },
            {
                id: 10,
                name: 'Tangraph',
                description: 'Tangraph is a graphing applet designed specifically with the sports statistics in mind. It offers a flexible, almost infinitely customizable interface and a powerful API.',
                technologies: 'Flash, HTML, PHP',
                tags: 'web',
                previewFirst: false,
                platforms: [
                    {
                        platform: 'desktop',
                        platformIcon: 'fa fa-desktop',
                        images: ['assets/images/portfolio/projects/tg.jpg', 'assets/images/portfolio/projects/tg2.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/desktop.png'
                    },
                    {
                        platform: 'tablet',
                        platformIcon: 'fa fa-tablet',
                        images: ['assets/images/portfolio/projects/tg.jpg', 'assets/images/portfolio/projects/tg2.jpg'],
                        active: false,
                        frame: 'assets/images/portfolio/devices/tablet.png'
                    }
                ]
            },
            {
                id: 11,
                name: 'Partner system for TravelMenu',
                description: 'Travelmenu offers visitors a full range of tourism products, which distinguishes us from our competitors sell only the hotels or tour only. You refer a customer can book a hotel, buy a ticket, sightseeing tours, as well as car hire, insurance, visa support, cruise, boat, etc.',
                technologies: 'DHTML, CSS, JavaScript, PHP',
                tags: 'web',
                previewFirst: true,
                platforms: [
                    {
                        platform: 'desktop',
                        platformIcon: 'fa fa-desktop',
                        images: ['assets/images/portfolio/portfolio-project/desktop/tm1.jpg', 'assets/images/portfolio/portfolio-project/desktop/tm2.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/desktop.png'
                    },
                    {
                        platform: 'tablet',
                        platformIcon: 'fa fa-tablet',
                        images: ['assets/images/portfolio/portfolio-project/desktop/tm1.jpg', 'assets/images/portfolio/portfolio-project/desktop/tm2.jpg'],
                        active: false,
                        frame: 'assets/images/portfolio/devices/tablet.png'
                    }
                ]
            },
            // project don't have platforms at all
            {
                id: 12,
                name: 'PPC–Advertiser',
                description: 'The main purpose of the system is to sell traffic to end-users (advertisers) within the PPC (Pay per click) system.',
                technologies: 'PHP, Highload, Sphinx, Redis, MySQL',
                tags: 'web',
                previewFirst: false,
                platforms: []
            },
            {
                id: 13,
                name: 'Statoscope',
                description: 'The application is aimed at visualizing the statistical data and world dynamics forecasts on the world map. It serves the purpose of popularizing the opportunities of the methods of mathematical modeling. The application is based on the results obtained by a research group of scientists from Moscow State University.',
                technologies: 'Flash, Flex, AIR',
                tags: 'mobile',
                previewFirst: true,
                platforms: [
                    {
                        platform: 'tablet',
                        platformIcon: 'fa fa-tablet',
                        images: ['assets/images/portfolio/projects/statoscope1.jpeg', 'assets/images/portfolio/projects/statoscope2.jpeg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/tablet.png'
                    }
                ]
            },
            {
                id: 14,
                name: 'Topology',
                description: 'The Topology CSO aims to standardize the manner in which network topology is computed, exported, represented and visualized. Upon receiving topology data (e.g. from the Collector), the Topology CSO analyzes the data and produces the following outputs:',
                technologies: 'Flex',
                tags: 'web,',
                previewFirst: false,
                platforms: [
                    {
                        platform: 'desktop',
                        platformIcon: 'fa fa-desktop',
                        images: ['assets/images/portfolio/projects/Topology1.jpg', 'assets/images/portfolio/projects/Topology2.jpg'],
                        active: true,
                        frame: 'assets/images/portfolio/devices/desktop.png'
                        // currImg: images[0] / null
                    }
                ]
                // currPlatform: platforms[0] / null
            }
        ];

        (function normalizeInput(projects) {
            if(projects.length != 0) {
            //check is there are any projects?
                for(var i in projects) {
                    projects[i].currPlatform = {}; //will be set as selected by default platform to preview
                    if(projects[i].tags.indexOf('web') != -1)
                        vm.webProjectsCount++;
                    if(projects[i].tags.indexOf('obile') != -1)
                        vm.mobileProjectsCount++;

                    if(projects[i].platforms.length != 0) {
                    //check is there are any platforms? and if it is -> setting the first as currPlatform
                        for(var n in projects[i].platforms) {
                            projects[i].platforms[n].currImg = ''; //will be shown on the device screen

                            if((projects[i].platforms[n].images.length != 0)&&(projects[i].platforms[n].frame.length!=0)) { ///??
                            //check is there are any images + frames? and if it is -> setting the first as currImg
                                projects[i].platforms[n].currImg = projects[i].platforms[n].images[0];
                            }
                            else if(projects[i].platforms[n].frame.length==0) { ///??
                                projects[i].platforms[n].frame = null;
                            }
                            else {
                            //ELSE currImg = null
                                projects[i].platforms[n].currImg = null;
                            }
                        }

                        projects[i].currPlatform = projects[i].platforms[0];
                    }
                    else {
                    //ELSE currPlatform = null
                        projects[i].currPlatform = null;
                    }
                }
            }
            else {
            //and if it isn't -> setting project = null
                projects = null;
            }
        })(projects);

        vm.projects = projects;

        vm.totalProjectsCount = vm.projects.length;

        function prevImg(curr, clicked) {
            var i = curr.images.indexOf(curr.currImg);
            if (i == 0) {
                curr.currImg = curr.images[curr.images.length - 1];
            } else {
                curr.currImg = curr.images[i-1];
            }
            $timeout(function(){clicked.prev = false;}, 500);
        }

        function nextImg(curr, clicked) {
            var i = curr.images.indexOf(curr.currImg);
            if(i == curr.images.length-1)  curr.currImg = curr.images[0];
            else {
                curr.currImg = curr.images[i+1];
            }
            $timeout(function(){clicked.next = false;}, 500);
        }

        function open (currPlatform) {
            $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/states/portfolio/modal.html',
                controller: 'modalInstanceController',
                size: 'lg',
                resolve: {
                    currPlatform: function () {
                        return currPlatform;
                    }
                }
            }).result
                .then(function ( success ) {
                    console.log('modal success', success);
                })
                .catch(function ( error ) {
                    console.log('modal error', error);
                });
        }

    });




