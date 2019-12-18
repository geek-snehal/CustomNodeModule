var exports = module.exports={};

exports.tutor = function(){
	console.log('Parent tutorial string')
};

exports.NodeTutorial=function(){
	console.log('Node tutorial string')
    this.PTutor=function(){   //this poiter is requite to make this function available outside
		var PTutor=Tutor
		PTutor.tutor();
    }
};

