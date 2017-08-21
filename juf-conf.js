var fs = require('fs');
var static = 'assets';
var template = 'views';
var devTemplate = 'themes';
var devStatic = 'static';

var config = {
    namespace: 'demo',      // 整个模块编译的命名空间
    type: 'smarty',         // 指定编译继承哪个解决方案的默认配置
    // 编译到本地服务器配置，default，对应编译命令 juf release
    default: {
        tpl: {
            src: '**/*.tpl',
            deploy: template,
            useDir: false   // 由于基于smarty的解决方案本地服务器有指定模版访问目录，所以在代码中资源引入的时候不需要加上模版目录
        },
        js: {
            src: '**/*.js',
            deploy: static,
            useDir: true    // 由于基于smarty的解决方案本地服务器没有指定静态访问目录，所以在代码中资源引入的时候需要加上静态访问目录
        },
        less: {
            src: '**/*.less',
            deploy: static,
            useDir: true
        },
        png: {
            src: '**/*.{png,jpg,jpeg,gif,eot,svg,ttf,woff,woff2}',
            deploy: static,
            useDir: true
        }
    },
    // 本地output配置，dev，对应编译命令 juf release -l '/d/output'
    dev: {
       tpl: {
            src: '**/*.tpl',
            deploy: devTemplate,
            useDir: false   // 由于基于smarty的解决方案线上服务器有指定模版访问目录，所以在代码中资源引入的时候不需要加上模版目录
        },
        js: {
            src: '**/*.js',
            deploy: devStatic,
            useDir: true   // 由于基于smarty的解决方案线上服务器没有指定静态访问目录，所以在代码中资源引入的时候需要加上静态访问目录
        },
        less: {
            src: '**/*.less',
            deploy: devStatic,
            useDir: true
        },
        png: {
            src: '**/*.{png,jpg,jpeg,gif,eot,svg,ttf,woff,woff2}',
            deploy: devStatic,
            useDir: true
        }
    },
    // 本地直接上传到测试机配置，例如gzh，对应编译命令 juf release -d gzh
    gzh: {
        root: '/data/wwwroot/gzh.juhe.cn',
        sshConfig: {
            host: '10.0.10.116',
            port: 22,
            username: 'root',
            privateKey: fs.readFileSync('C:/Users/Administrator/.ssh/id_rsa_2048')
        }
    },
    // 供线上编译脚本，需要把静态资源上传阿里oss的需求
    oss: {
        accessKeyId: '***',
        accessKeySecret: '***',
        bucket: '***'
    }
};

module.exports = config;