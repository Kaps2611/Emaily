//keys,js-figure out what set of credential to return
if(ProcessingInstruction.env.NODE_ENV === 'production'){
  //we are in the production 
  module.exports =require('./prod');
}
else{
  // we are in development 
  module.exports =require('./dev');
}


// nq0b6dBzE6qqTtac
// kapildamodare2619
// AmqCuUGincwavbnG

// mongodb+srv://kapildamodare2619:AmqCuUGincwavbnG@cluster0.fwgwx.mongodb.net/emailyprod?retryWrites=true&w=majority&appName=Cluster0


//prod
// Client id - 831275697577-7t201l1kklnvg5182a5piugb4iuegasl.apps.googleusercontent.com
//client-secret - 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