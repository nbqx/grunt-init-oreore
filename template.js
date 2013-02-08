exports.description = 'For Prototyping a Website';
exports.warnOn = '*';

exports.template = function(grunt,init,done){
  init.process(
    {},
    [
      init.prompt('name','the-prototyping'),
      init.prompt('description'),
      init.prompt('version','0.0.0')
    ],
    function(err,props){
      props.author = 'ore';

      var files = init.filesToCopy(props);
      init.copyAndProcess(files,props);

      init.writePackageJSON('package.json',{
        name: 'oreore',
        version: '0.0.0',
        node_version: '>= 0.8.0',
        devDependencies: {
          "grunt": "0.4.0rc7",
          "grunt-contrib-concat": "0.1.2rc6",
          "grunt-contrib-connect": "0.1.0",
          "grunt-contrib-jade": "0.4.0rc7",
          "grunt-contrib-livereload": "0.1.0rc8",
          "grunt-contrib-mincss": "0.4.0rc7",
          "grunt-contrib-sass": "0.2.2rc7",
          "grunt-compass": "0.3.8",
          "grunt-contrib-uglify": "0.1.1rc6",
          "grunt-regarde": "0.1.1"
        }
      });
      done();
    }
  );
};