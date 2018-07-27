
'use strict';

angular

    .module('app')

    .constant('incomeTechnologies', [
        {
            field: 'Programming/scripting languages',
            headline: 'Outstanding skills',
            skills: ['Java', 'C#', 'JavaScript', 'Groovy', 'Objective-C', 'PHP', 'PL/SQL', 'VBA', 'PowerShell', 'ActionScript 3', 'xHTML/HTML5']
        },
        {
            field: 'Frameworks and technologies',
            headline: 'Outstanding skills',
            skills: ['Spring MVC/WS/Integration/Security', 'EJB, JPA/Hibernate', 'Servlets/JSP, JSTL, JSF, GWT, XML/XSLT', 'Flash/Flex 3+/AIR', 'jQuery/AngularJS/ExtJS/Dojo/Gulp', 'CSS3/LESS/SASS']
        },
        {
            field: 'Databases(SQL, NoSQL)',
            headline: 'Design and development',
            skills: ['MySQL', 'MSSQL', 'Oracle', 'Memcached', 'Redis', 'PostageSQL']
        },
        {
            field: 'Platforms and servers',
            headline: 'Administration and development',
            skills: ['JBoss', 'IBM WebSphere', 'Oracle WebLogic', 'Tomcat', 'Apache Solr', 'RabbitMQ', 'Adobe LiveCycle', 'Apache', 'SharePoint']
        },
        {
            field: 'Project Management/Continuous integration',
            headline: 'Extended usage',
            skills: ['Jira', 'SVN', 'Hudson', 'TFS', 'Redmine', 'VSS', 'Mantis']
        }
        //,{
        //     field: 'my own technology',
        //     headline: 'now i can add some things :)',
        //     skills: ['bla on the left', 'bla-bla on the left', 'bla on the right']
        // },
        // {
        //     field: 'one more',
        //     headline: 'XA XA XA',
        //     skills: ['left 1', 'left 2', 'left 3', 'left 4', 'right 1', 'right 2', 'right 3', 'right 4']
        // }
        //
    ]);
