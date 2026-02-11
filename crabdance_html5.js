(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 140,
	height: 114,
	fps: 12,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Mesh.png", id:"Mesh"},
		{src:"images/Mesh_1.png", id:"Mesh_1"},
		{src:"images/Mesh_2.png", id:"Mesh_2"},
		{src:"images/Path.png", id:"Path"},
		{src:"images/Path_1.png", id:"Path_1"},
		{src:"images/Path_10.png", id:"Path_10"},
		{src:"images/Path_11.png", id:"Path_11"},
		{src:"images/Path_2.png", id:"Path_2"},
		{src:"images/Path_4.png", id:"Path_4"},
		{src:"images/Path_5.png", id:"Path_5"},
		{src:"images/Path_6.png", id:"Path_6"},
		{src:"images/Path_7.png", id:"Path_7"},
		{src:"images/Path_8.png", id:"Path_8"},
		{src:"images/Path_9.png", id:"Path_9"}
	]
};

// stage content:
(lib.crabdance_html5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// TopShell
	this.instance = new lib.Mesh_2();
	this.instance.setTransform(31.4,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// Leg6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABgBQgEgWgDgFIgDgCIAOgIQgBAGABAHIADAMQADAMgFAOIgHAaQABgKABgeg");
	this.shape.setTransform(127.4,97.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#49A8DF").s().p("AAvAhQgigZg2gVQgJgJgSABIAGgLIACABQARAOAsANQAyANAQALIACAEQgEAGgJADg");
	this.shape_1.setTransform(120.6,89.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#49A8DF").s().p("AAjAEQgdgDgVADIgogEQgXgBgQAEIAcgQIBLAGQAwADAegBQAGACACAEQAAAGgIAGIg0gJg");
	this.shape_2.setTransform(103.6,85.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#272425").s().p("ACHBtQAAgFAJglQAGgbgHgRQhBgzhHgRQhngRhMAIIgDgBQgPgPABgLQABgGAMgLQAJgKAagCQAdgCAPALQAJAFAOABQAUAAAFABQAKADAdgDQAWgCANAJQADAGAHAHQAPALAcAJIAJAFQALACAWAHIAZAIQAZACAJAUQAKAhABAQQACAegRATQgLATgYAEIgFgCg");
	this.shape_3.setTransform(111,92.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{rotation:0,x:111,y:92.8,scaleX:1,scaleY:1}},{t:this.shape_2,p:{rotation:0,x:103.6,y:85.1,scaleX:1,scaleY:1}},{t:this.shape_1,p:{rotation:0,x:120.6,y:89.5,scaleX:1,scaleY:1}},{t:this.shape,p:{rotation:0,x:127.4,y:97.1,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_3,p:{rotation:0,x:111,y:92.8,scaleX:1,scaleY:1}},{t:this.shape_2,p:{rotation:0,x:103.6,y:85.1,scaleX:1,scaleY:1}},{t:this.shape_1,p:{rotation:0,x:120.6,y:89.5,scaleX:1,scaleY:1}},{t:this.shape,p:{rotation:0,x:127.4,y:97.1,scaleX:1,scaleY:1}}]},8).to({state:[{t:this.shape_3,p:{rotation:-8,x:111.9,y:90.4,scaleX:1,scaleY:1}},{t:this.shape_2,p:{rotation:-8,x:103.5,y:83.9,scaleX:1,scaleY:1}},{t:this.shape_1,p:{rotation:-8,x:120.9,y:85.8,scaleX:1,scaleY:1}},{t:this.shape,p:{rotation:-8,x:128.7,y:92.4,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_3,p:{rotation:1.3,x:110.8,y:93.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_2,p:{rotation:1.3,x:103.6,y:85.3,scaleX:0.999,scaleY:0.999}},{t:this.shape_1,p:{rotation:1.3,x:120.4,y:90.1,scaleX:0.999,scaleY:0.999}},{t:this.shape,p:{rotation:1.3,x:127.1,y:97.8,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.shape_3,p:{rotation:-4.2,x:111.5,y:91.5,scaleX:0.999,scaleY:0.999}},{t:this.shape_2,p:{rotation:-4.2,x:103.6,y:84.5,scaleX:0.999,scaleY:0.999}},{t:this.shape_1,p:{rotation:-4.2,x:120.8,y:87.6,scaleX:0.999,scaleY:0.999}},{t:this.shape,p:{rotation:-4.2,x:128.2,y:94.7,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.shape_3,p:{rotation:1.8,x:110.7,y:93.3,scaleX:0.998,scaleY:0.998}},{t:this.shape_2,p:{rotation:1.8,x:103.6,y:85.4,scaleX:0.998,scaleY:0.998}},{t:this.shape_1,p:{rotation:1.8,x:120.4,y:90.3,scaleX:0.998,scaleY:0.998}},{t:this.shape,p:{rotation:1.8,x:127,y:98.2,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.shape_3,p:{rotation:-4.5,x:111.5,y:91.5,scaleX:0.998,scaleY:0.998}},{t:this.shape_2,p:{rotation:-4.5,x:103.6,y:84.5,scaleX:0.998,scaleY:0.998}},{t:this.shape_1,p:{rotation:-4.5,x:120.8,y:87.5,scaleX:0.998,scaleY:0.998}},{t:this.shape,p:{rotation:-4.5,x:128.2,y:94.6,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.shape_3,p:{rotation:2.8,x:110.6,y:93.6,scaleX:0.998,scaleY:0.998}},{t:this.shape_2,p:{rotation:2.8,x:103.6,y:85.6,scaleX:0.998,scaleY:0.998}},{t:this.shape_1,p:{rotation:2.8,x:120.3,y:90.8,scaleX:0.998,scaleY:0.998}},{t:this.shape,p:{rotation:2.8,x:126.7,y:98.8,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.shape_3,p:{rotation:-7.2,x:111.7,y:90.8,scaleX:0.997,scaleY:0.997}},{t:this.shape_2,p:{rotation:-7.2,x:103.5,y:84.1,scaleX:0.997,scaleY:0.997}},{t:this.shape_1,p:{rotation:-7.2,x:120.8,y:86.3,scaleX:0.997,scaleY:0.997}},{t:this.shape,p:{rotation:-7.2,x:128.5,y:93.1,scaleX:0.997,scaleY:0.997}}]},3).to({state:[{t:this.shape_3,p:{rotation:2.6,x:110.6,y:93.6,scaleX:0.996,scaleY:0.996}},{t:this.shape_2,p:{rotation:2.6,x:103.6,y:85.7,scaleX:0.996,scaleY:0.996}},{t:this.shape_1,p:{rotation:2.6,x:120.3,y:90.8,scaleX:0.996,scaleY:0.996}},{t:this.shape,p:{rotation:2.6,x:126.8,y:98.7,scaleX:0.996,scaleY:0.996}}]},3).to({state:[{t:this.shape_3,p:{rotation:-4.4,x:111.5,y:91.6,scaleX:0.996,scaleY:0.996}},{t:this.shape_2,p:{rotation:-4.4,x:103.6,y:84.6,scaleX:0.996,scaleY:0.996}},{t:this.shape_1,p:{rotation:-4.4,x:120.8,y:87.6,scaleX:0.996,scaleY:0.996}},{t:this.shape,p:{rotation:-4.4,x:128.2,y:94.7,scaleX:0.996,scaleY:0.996}}]},3).to({state:[{t:this.shape_3,p:{rotation:2.9,x:110.5,y:93.7,scaleX:0.996,scaleY:0.996}},{t:this.shape_2,p:{rotation:2.9,x:103.6,y:85.7,scaleX:0.996,scaleY:0.996}},{t:this.shape_1,p:{rotation:2.9,x:120.2,y:90.9,scaleX:0.996,scaleY:0.996}},{t:this.shape,p:{rotation:2.9,x:126.7,y:98.8,scaleX:0.996,scaleY:0.996}}]},3).to({state:[{t:this.shape_3,p:{rotation:-4.5,x:111.5,y:91.6,scaleX:0.995,scaleY:0.995}},{t:this.shape_2,p:{rotation:-4.5,x:103.6,y:84.6,scaleX:0.995,scaleY:0.995}},{t:this.shape_1,p:{rotation:-4.5,x:120.7,y:87.6,scaleX:0.995,scaleY:0.995}},{t:this.shape,p:{rotation:-4.5,x:128.1,y:94.7,scaleX:0.995,scaleY:0.995}}]},4).to({state:[{t:this.shape_3,p:{rotation:0,x:111,y:92.8,scaleX:1,scaleY:1}},{t:this.shape_2,p:{rotation:0,x:103.6,y:85.1,scaleX:1,scaleY:1}},{t:this.shape_1,p:{rotation:0,x:120.6,y:89.5,scaleX:1,scaleY:1}},{t:this.shape,p:{rotation:0,x:127.4,y:97.1,scaleX:1,scaleY:1}}]},4).wait(1));

	// Leg5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHACQADgIgEgJIACgBIAVACQgCAHgIAHIgLALIgIAGIAHgPg");
	this.shape_4.setTransform(133.3,73.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#49A8DF").s().p("AAAAEIg0gBIgCACQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIABgEQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIBsgEQAEABADAFIAAACQgBACgGAFQgWgDgegBg");
	this.shape_5.setTransform(130.9,70.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#49A8DF").s().p("AhTAQIAGABIAGgHIAkgIIBwgoQAEAAACACQADAFgHAKQgVAKgwALQgyAKgUAIQgMABgFAFIAAAPg");
	this.shape_6.setTransform(115.4,73.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#272425").s().p("AA/AyQgDgDAAgCIAWgWQALgMAEgMQgHgFgRAAQgSAAgHgDIgRAKQgMAHgLABIhBAKQgoAGgXANQguAGgEgPQgEgLAagRIAFAAIA8gNIBTgeQAGgIAPAAIAZABQBMgDAmAGQAJAEADANIgFAPIgOALQgVAmg0APIgLABIgGgBg");
	this.shape_7.setTransform(120.9,73.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{rotation:0,x:120.9,y:73.1,scaleX:1,scaleY:1}},{t:this.shape_6,p:{rotation:0,x:115.4,y:73.2,scaleX:1,scaleY:1}},{t:this.shape_5,p:{rotation:0,x:130.9,y:70.4,scaleX:1,scaleY:1}},{t:this.shape_4,p:{rotation:0,x:133.3,y:73.5,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_7,p:{rotation:0,x:120.9,y:73.1,scaleX:1,scaleY:1}},{t:this.shape_6,p:{rotation:0,x:115.4,y:73.2,scaleX:1,scaleY:1}},{t:this.shape_5,p:{rotation:0,x:130.9,y:70.4,scaleX:1,scaleY:1}},{t:this.shape_4,p:{rotation:0,x:133.3,y:73.5,scaleX:1,scaleY:1}}]},8).to({state:[{t:this.shape_7,p:{rotation:-8.8,x:120.3,y:70.8,scaleX:1,scaleY:1}},{t:this.shape_6,p:{rotation:-8.8,x:114.9,y:71.7,scaleX:1,scaleY:1}},{t:this.shape_5,p:{rotation:-8.8,x:129.7,y:66.6,scaleX:1,scaleY:1}},{t:this.shape_4,p:{rotation:-8.8,x:132.6,y:69.3,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_7,p:{rotation:1.3,x:120.9,y:73.4,scaleX:0.999,scaleY:0.999}},{t:this.shape_6,p:{rotation:1.3,x:115.4,y:73.4,scaleX:0.999,scaleY:0.999}},{t:this.shape_5,p:{rotation:1.3,x:130.9,y:70.9,scaleX:0.999,scaleY:0.999}},{t:this.shape_4,p:{rotation:1.3,x:133.2,y:74.1,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.shape_7,p:{rotation:-7.2,x:120.2,y:71.1,scaleX:0.998,scaleY:0.998}},{t:this.shape_6,p:{rotation:-7.2,x:114.8,y:72,scaleX:0.998,scaleY:0.998}},{t:this.shape_5,p:{rotation:-7.2,x:129.8,y:67.2,scaleX:0.998,scaleY:0.998}},{t:this.shape_4,p:{rotation:-7.2,x:132.6,y:70,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.shape_7,p:{rotation:0.6,x:120.7,y:73.1,scaleX:0.998,scaleY:0.998}},{t:this.shape_6,p:{rotation:0.6,x:115.3,y:73.2,scaleX:0.998,scaleY:0.998}},{t:this.shape_5,p:{rotation:0.6,x:130.7,y:70.5,scaleX:0.998,scaleY:0.998}},{t:this.shape_4,p:{rotation:0.6,x:133.1,y:73.7,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.shape_7,p:{rotation:-5.7,x:120.3,y:71.5,scaleX:0.998,scaleY:0.998}},{t:this.shape_6,p:{rotation:-5.7,x:114.9,y:72.2,scaleX:0.998,scaleY:0.998}},{t:this.shape_5,p:{rotation:-5.7,x:129.9,y:67.8,scaleX:0.998,scaleY:0.998}},{t:this.shape_4,p:{rotation:-5.7,x:132.6,y:70.7,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.shape_7,p:{rotation:-1.6,x:120.6,y:72.6,scaleX:0.997,scaleY:0.997}},{t:this.shape_6,p:{rotation:-1.6,x:115.1,y:72.9,scaleX:0.997,scaleY:0.997}},{t:this.shape_5,p:{rotation:-1.6,x:130.5,y:69.6,scaleX:0.997,scaleY:0.997}},{t:this.shape_4,p:{rotation:-1.6,x:133,y:72.7,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.shape_7,p:{rotation:-10.7,x:119.9,y:70.3,scaleX:0.997,scaleY:0.997}},{t:this.shape_6,p:{rotation:-10.7,x:114.6,y:71.4,scaleX:0.997,scaleY:0.997}},{t:this.shape_5,p:{rotation:-10.7,x:129.2,y:65.7,scaleX:0.997,scaleY:0.997}},{t:this.shape_4,p:{rotation:-10.7,x:132.1,y:68.4,scaleX:0.997,scaleY:0.997}}]},3).to({state:[{t:this.shape_7,p:{rotation:-2.9,x:120.5,y:72.3,scaleX:0.996,scaleY:0.996}},{t:this.shape_6,p:{rotation:-2.9,x:115,y:72.7,scaleX:0.996,scaleY:0.996}},{t:this.shape_5,p:{rotation:-2.9,x:130.3,y:69.1,scaleX:0.996,scaleY:0.996}},{t:this.shape_4,p:{rotation:-2.9,x:132.8,y:72.1,scaleX:0.996,scaleY:0.996}}]},2).to({state:[{t:this.shape_7,p:{rotation:-9,x:120,y:70.7,scaleX:0.996,scaleY:0.996}},{t:this.shape_6,p:{rotation:-9,x:114.6,y:71.7,scaleX:0.996,scaleY:0.996}},{t:this.shape_5,p:{rotation:-9,x:129.4,y:66.5,scaleX:0.996,scaleY:0.996}},{t:this.shape_4,p:{rotation:-9,x:132.2,y:69.2,scaleX:0.996,scaleY:0.996}}]},3).to({state:[{t:this.shape_7,p:{rotation:-2.2,x:120.5,y:72.4,scaleX:0.996,scaleY:0.996}},{t:this.shape_6,p:{rotation:-2.2,x:115.1,y:72.8,scaleX:0.996,scaleY:0.996}},{t:this.shape_5,p:{rotation:-2.2,x:130.3,y:69.3,scaleX:0.996,scaleY:0.996}},{t:this.shape_4,p:{rotation:-2.2,x:132.9,y:72.4,scaleX:0.996,scaleY:0.996}}]},3).to({state:[{t:this.shape_7,p:{rotation:-8.7,x:120,y:70.8,scaleX:0.995,scaleY:0.995}},{t:this.shape_6,p:{rotation:-8.7,x:114.6,y:71.7,scaleX:0.995,scaleY:0.995}},{t:this.shape_5,p:{rotation:-8.7,x:129.4,y:66.6,scaleX:0.995,scaleY:0.995}},{t:this.shape_4,p:{rotation:-8.7,x:132.3,y:69.3,scaleX:0.995,scaleY:0.995}}]},2).to({state:[{t:this.shape_7,p:{rotation:-8.7,x:120,y:70.8,scaleX:0.995,scaleY:0.995}},{t:this.shape_6,p:{rotation:-8.7,x:114.6,y:71.7,scaleX:0.995,scaleY:0.995}},{t:this.shape_5,p:{rotation:-8.7,x:129.4,y:66.6,scaleX:0.995,scaleY:0.995}},{t:this.shape_4,p:{rotation:-8.7,x:132.3,y:69.3,scaleX:0.995,scaleY:0.995}}]},1).to({state:[{t:this.shape_7,p:{rotation:-4,x:120.4,y:72,scaleX:0.995,scaleY:0.995}},{t:this.shape_6,p:{rotation:-4,x:115,y:72.5,scaleX:0.995,scaleY:0.995}},{t:this.shape_5,p:{rotation:-4,x:130.1,y:68.6,scaleX:0.995,scaleY:0.995}},{t:this.shape_4,p:{rotation:-4,x:132.7,y:71.6,scaleX:0.995,scaleY:0.995}}]},2).to({state:[{t:this.shape_7,p:{rotation:0,x:120.9,y:73.1,scaleX:1,scaleY:1}},{t:this.shape_6,p:{rotation:0,x:115.4,y:73.2,scaleX:1,scaleY:1}},{t:this.shape_5,p:{rotation:0,x:130.9,y:70.4,scaleX:1,scaleY:1}},{t:this.shape_4,p:{rotation:0,x:133.3,y:73.5,scaleX:1,scaleY:1}}]},4).wait(1));

	// Leg4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#49A8DF").s().p("AhKAoQAVgOA1gaQAugYAYgRQABgBAAAAQABAAAAAAQABABAAAAQABAAAAABIABAEIhbAzIgwAXIgBAFg");
	this.shape_8.setTransform(103.3,58.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#49A8DF").s().p("AAJgbIACAAIABABQACAIgGANIgIAVQgFAHgHAFg");
	this.shape_9.setTransform(113.9,50.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUgLIABABIgFAOIgkAIg");
	this.shape_10.setTransform(111.2,49);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#272425").s().p("AhoBbQgHgDgCgCQgDgEgBgJQgBgJARgLQBhgpAtgcQADgEAGgCIAKgDQAEgFAAgEIg7AGIgCgDQAKgWAWgPIAVgKQALgFAMgBQAFgFAIgBQAJgCAGADQALAGAAANQgJAqgkAWIgDAPQgIAIgTAIIghANQgHACgSAKIgQAJIgPAIQgPAHgHAGQgXAMgJAAIgEgBg");
	this.shape_11.setTransform(105.3,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{rotation:0,x:105.3,y:55.3,scaleX:1,scaleY:1}},{t:this.shape_10,p:{rotation:0,x:111.2,y:49,scaleX:1,scaleY:1}},{t:this.shape_9,p:{rotation:0,x:113.9,y:50.2,scaleX:1,scaleY:1}},{t:this.shape_8,p:{rotation:0,x:103.3,y:58.8,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_11,p:{rotation:0,x:105.3,y:55.3,scaleX:1,scaleY:1}},{t:this.shape_10,p:{rotation:0,x:111.2,y:49,scaleX:1,scaleY:1}},{t:this.shape_9,p:{rotation:0,x:113.9,y:50.2,scaleX:1,scaleY:1}},{t:this.shape_8,p:{rotation:0,x:103.3,y:58.8,scaleX:1,scaleY:1}}]},8).to({state:[{t:this.shape_11,p:{rotation:7.1,x:106.1,y:56.5,scaleX:1,scaleY:1}},{t:this.shape_10,p:{rotation:7.1,x:112.7,y:51,scaleX:1,scaleY:1}},{t:this.shape_9,p:{rotation:7.1,x:115.2,y:52.5,scaleX:1,scaleY:1}},{t:this.shape_8,p:{rotation:7.1,x:103.6,y:59.7,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_11,p:{rotation:-0.5,x:105.3,y:55.2,scaleX:0.999,scaleY:0.999}},{t:this.shape_10,p:{rotation:-0.5,x:111.1,y:48.9,scaleX:0.999,scaleY:0.999}},{t:this.shape_9,p:{rotation:-0.5,x:113.8,y:50,scaleX:0.999,scaleY:0.999}},{t:this.shape_8,p:{rotation:-0.5,x:103.2,y:58.7,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.shape_11,p:{rotation:5.6,x:105.9,y:56.2,scaleX:0.999,scaleY:0.999}},{t:this.shape_10,p:{rotation:5.6,x:112.4,y:50.5,scaleX:0.999,scaleY:0.999}},{t:this.shape_9,p:{rotation:5.6,x:115,y:52,scaleX:0.999,scaleY:0.999}},{t:this.shape_8,p:{rotation:5.6,x:103.6,y:59.5,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.shape_11,p:{rotation:0.3,x:105.3,y:55.2,scaleX:0.999,scaleY:0.999}},{t:this.shape_10,p:{rotation:0.3,x:111.2,y:49,scaleX:0.999,scaleY:0.999}},{t:this.shape_9,p:{rotation:0.3,x:113.9,y:50.2,scaleX:0.999,scaleY:0.999}},{t:this.shape_8,p:{rotation:0.3,x:103.2,y:58.7,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.shape_11,p:{rotation:3.6,x:105.7,y:55.8,scaleX:0.998,scaleY:0.998}},{t:this.shape_10,p:{rotation:3.6,x:112,y:49.9,scaleX:0.998,scaleY:0.998}},{t:this.shape_9,p:{rotation:3.6,x:114.6,y:51.3,scaleX:0.998,scaleY:0.998}},{t:this.shape_8,p:{rotation:3.6,x:103.4,y:59.2,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.shape_11,p:{rotation:-4.7,x:104.7,y:54.4,scaleX:0.998,scaleY:0.998}},{t:this.shape_10,p:{rotation:-4.7,x:110,y:47.7,scaleX:0.998,scaleY:0.998}},{t:this.shape_9,p:{rotation:-4.7,x:112.8,y:48.7,scaleX:0.998,scaleY:0.998}},{t:this.shape_8,p:{rotation:-4.7,x:102.9,y:58.1,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.shape_11,p:{rotation:5.5,x:106,y:56.1,scaleX:0.997,scaleY:0.997}},{t:this.shape_10,p:{rotation:5.5,x:112.4,y:50.5,scaleX:0.997,scaleY:0.997}},{t:this.shape_9,p:{rotation:5.5,x:115,y:51.9,scaleX:0.997,scaleY:0.997}},{t:this.shape_8,p:{rotation:5.5,x:103.6,y:59.4,scaleX:0.997,scaleY:0.997}}]},3).to({state:[{t:this.shape_11,p:{rotation:-0.5,x:105.3,y:55.1,scaleX:0.997,scaleY:0.997}},{t:this.shape_10,p:{rotation:-0.5,x:111.1,y:48.8,scaleX:0.997,scaleY:0.997}},{t:this.shape_9,p:{rotation:-0.5,x:113.8,y:50,scaleX:0.997,scaleY:0.997}},{t:this.shape_8,p:{rotation:-0.5,x:103.2,y:58.6,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.shape_11,p:{rotation:4.3,x:105.8,y:55.9,scaleX:0.997,scaleY:0.997}},{t:this.shape_10,p:{rotation:4.3,x:112.2,y:50.1,scaleX:0.997,scaleY:0.997}},{t:this.shape_9,p:{rotation:4.3,x:114.7,y:51.5,scaleX:0.997,scaleY:0.997}},{t:this.shape_8,p:{rotation:4.3,x:103.5,y:59.3,scaleX:0.997,scaleY:0.997}}]},3).to({state:[{t:this.shape_11,p:{rotation:-1.7,x:105,y:54.9,scaleX:0.996,scaleY:0.996}},{t:this.shape_10,p:{rotation:-1.7,x:110.7,y:48.5,scaleX:0.996,scaleY:0.996}},{t:this.shape_9,p:{rotation:-1.7,x:113.4,y:49.6,scaleX:0.996,scaleY:0.996}},{t:this.shape_8,p:{rotation:-1.7,x:103.1,y:58.4,scaleX:0.996,scaleY:0.996}}]},2).to({state:[{t:this.shape_11,p:{rotation:3.5,x:105.8,y:55.8,scaleX:0.996,scaleY:0.996}},{t:this.shape_10,p:{rotation:3.5,x:112,y:49.9,scaleX:0.996,scaleY:0.996}},{t:this.shape_9,p:{rotation:3.5,x:114.6,y:51.3,scaleX:0.996,scaleY:0.996}},{t:this.shape_8,p:{rotation:3.5,x:103.5,y:59.1,scaleX:0.996,scaleY:0.996}}]},3).to({state:[{t:this.shape_11,p:{rotation:-0.2,x:105.3,y:55.2,scaleX:0.996,scaleY:0.996}},{t:this.shape_10,p:{rotation:-0.2,x:111.2,y:48.9,scaleX:0.996,scaleY:0.996}},{t:this.shape_9,p:{rotation:-0.2,x:113.8,y:50.1,scaleX:0.996,scaleY:0.996}},{t:this.shape_8,p:{rotation:-0.2,x:103.3,y:58.7,scaleX:0.996,scaleY:0.996}}]},3).to({state:[{t:this.shape_11,p:{rotation:3.6,x:105.8,y:55.9,scaleX:0.996,scaleY:0.996}},{t:this.shape_10,p:{rotation:3.6,x:112,y:50,scaleX:0.996,scaleY:0.996}},{t:this.shape_9,p:{rotation:3.6,x:114.6,y:51.4,scaleX:0.996,scaleY:0.996}},{t:this.shape_8,p:{rotation:3.6,x:103.5,y:59.2,scaleX:0.996,scaleY:0.996}}]},2).to({state:[{t:this.shape_11,p:{rotation:0,x:105.3,y:55.3,scaleX:1,scaleY:1}},{t:this.shape_10,p:{rotation:0,x:111.2,y:49,scaleX:1,scaleY:1}},{t:this.shape_9,p:{rotation:0,x:113.9,y:50.2,scaleX:1,scaleY:1}},{t:this.shape_8,p:{rotation:0,x:103.3,y:58.8,scaleX:1,scaleY:1}}]},4).wait(1));

	// Leg3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#49A8DF").s().p("AgOAvIADgRIAJgjQACgXAEgNQADgGADgLIgBgDIAHAHQgDAFgCAKQgBANgDAFQgEAOgBAaQgCAbgCAMIgDADIgIABQgEgEADgLg");
	this.shape_12.setTransform(24.2,100.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#49A8DF").s().p("AhLAwQgFgEAEgKQASgPAigSQAkgSAOgLQAIgCAMgIQALgHAHgDIAPAJQgEAFgKAEIgPAHQgOAJgtAXQgmAUgUARIAAADg");
	this.shape_13.setTransform(33.6,88.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAAIgIgMQAAAAAAgBQAAAAABgBQAAAAABAAQABAAABAAIAEAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAEABABIAjAUIgHABQgQAAgQgPg");
	this.shape_14.setTransform(26.4,108.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#272425").s().p("AhBCHQgXgOgLgVIgIgFIgDgHQALgrAEgXQABgLAJgYQAIgYAAgNQAEgOARgLQATgOAFgIIBdgrQAWAAAKAHQAQAIACAUIiKA/QgBACAAADIgOAUIgEAEIgPBoQAMAKAWALIAhATIACAEQgMAHgSAAQgTAAgYgHg");
	this.shape_15.setTransform(31.8,97.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15,p:{rotation:0,x:31.8,y:97.3}},{t:this.shape_14,p:{rotation:0,x:26.4,y:108.5}},{t:this.shape_13,p:{rotation:0,x:33.6,y:88.6}},{t:this.shape_12,p:{rotation:0,x:24.2,y:100.2}}]}).to({state:[{t:this.shape_15,p:{rotation:0,x:31.8,y:97.3}},{t:this.shape_14,p:{rotation:0,x:26.4,y:108.5}},{t:this.shape_13,p:{rotation:0,x:33.6,y:88.6}},{t:this.shape_12,p:{rotation:0,x:24.2,y:100.2}}]},8).to({state:[{t:this.shape_15,p:{rotation:30,x:26.3,y:91.3}},{t:this.shape_14,p:{rotation:30,x:16,y:98.4}},{t:this.shape_13,p:{rotation:30,x:32.2,y:84.7}},{t:this.shape_12,p:{rotation:30,x:18.3,y:90}}]},3).to({state:[{t:this.shape_15,p:{rotation:0,x:31.9,y:97.3}},{t:this.shape_14,p:{rotation:0,x:26.5,y:108.6}},{t:this.shape_13,p:{rotation:0,x:33.7,y:88.7}},{t:this.shape_12,p:{rotation:0,x:24.3,y:100.2}}]},2).to({state:[{t:this.shape_15,p:{rotation:15,x:28.7,y:94.7}},{t:this.shape_14,p:{rotation:15,x:20.6,y:104.2}},{t:this.shape_13,p:{rotation:15,x:32.7,y:86.8}},{t:this.shape_12,p:{rotation:15,x:20.6,y:95.5}}]},2).to({state:[{t:this.shape_15,p:{rotation:0,x:31.9,y:97.3}},{t:this.shape_14,p:{rotation:0,x:26.5,y:108.6}},{t:this.shape_13,p:{rotation:0,x:33.7,y:88.7}},{t:this.shape_12,p:{rotation:0,x:24.3,y:100.2}}]},2).to({state:[{t:this.shape_15,p:{rotation:15,x:28.7,y:94.7}},{t:this.shape_14,p:{rotation:15,x:20.6,y:104.2}},{t:this.shape_13,p:{rotation:15,x:32.7,y:86.8}},{t:this.shape_12,p:{rotation:15,x:20.6,y:95.5}}]},3).to({state:[{t:this.shape_15,p:{rotation:0,x:31.9,y:97.3}},{t:this.shape_14,p:{rotation:0,x:26.5,y:108.6}},{t:this.shape_13,p:{rotation:0,x:33.7,y:88.7}},{t:this.shape_12,p:{rotation:0,x:24.3,y:100.2}}]},3).to({state:[{t:this.shape_15,p:{rotation:30,x:26.4,y:91.4}},{t:this.shape_14,p:{rotation:30,x:16.1,y:98.4}},{t:this.shape_13,p:{rotation:30,x:32.3,y:84.8}},{t:this.shape_12,p:{rotation:30,x:18.4,y:90.1}}]},3).to({state:[{t:this.shape_15,p:{rotation:15,x:28.7,y:94.7}},{t:this.shape_14,p:{rotation:15,x:20.6,y:104.2}},{t:this.shape_13,p:{rotation:15,x:32.7,y:86.8}},{t:this.shape_12,p:{rotation:15,x:20.6,y:95.5}}]},2).to({state:[{t:this.shape_15,p:{rotation:0,x:31.9,y:97.3}},{t:this.shape_14,p:{rotation:0,x:26.5,y:108.6}},{t:this.shape_13,p:{rotation:0,x:33.7,y:88.7}},{t:this.shape_12,p:{rotation:0,x:24.3,y:100.2}}]},3).to({state:[{t:this.shape_15,p:{rotation:15,x:28.7,y:94.7}},{t:this.shape_14,p:{rotation:15,x:20.6,y:104.2}},{t:this.shape_13,p:{rotation:15,x:32.7,y:86.8}},{t:this.shape_12,p:{rotation:15,x:20.6,y:95.5}}]},2).to({state:[{t:this.shape_15,p:{rotation:0,x:31.9,y:97.3}},{t:this.shape_14,p:{rotation:0,x:26.5,y:108.6}},{t:this.shape_13,p:{rotation:0,x:33.7,y:88.7}},{t:this.shape_12,p:{rotation:0,x:24.3,y:100.2}}]},3).to({state:[{t:this.shape_15,p:{rotation:15,x:28.7,y:94.7}},{t:this.shape_14,p:{rotation:15,x:20.6,y:104.2}},{t:this.shape_13,p:{rotation:15,x:32.7,y:86.8}},{t:this.shape_12,p:{rotation:15,x:20.6,y:95.5}}]},2).to({state:[{t:this.shape_15,p:{rotation:0,x:31.9,y:97.3}},{t:this.shape_14,p:{rotation:0,x:26.5,y:108.6}},{t:this.shape_13,p:{rotation:0,x:33.7,y:88.7}},{t:this.shape_12,p:{rotation:0,x:24.3,y:100.2}}]},2).to({state:[{t:this.shape_15,p:{rotation:0,x:31.8,y:97.3}},{t:this.shape_14,p:{rotation:0,x:26.4,y:108.5}},{t:this.shape_13,p:{rotation:0,x:33.6,y:88.6}},{t:this.shape_12,p:{rotation:0,x:24.2,y:100.2}}]},4).wait(1));

	// Leg2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#49A8DF").s().p("AghAZIAEgLQAQgRAdgVIALgJIABAAIAHAPQgbANgXAYIABAFQABADgBACQgDAFgOAAQgEgCACgHg");
	this.shape_16.setTransform(8.3,81.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#49A8DF").s().p("AheAZQgFgFACgMIABgDQATgFAsgCQAngDAVgHIAkgGIAkgGQgIALgHADQgOgDgWAGQgbAGgKAAIgoAIQgbAHgOACIgMAGQgGADgFAAIgBAAg");
	this.shape_17.setTransform(22.3,76.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#272425").s().p("AhXBjIgIgCQgIgDgRgRIgWghIACgFQgQgJADgQQAIgUAYgSQAOgLAdgSQAHgMAGgCQAbgGBNgHQBDgHAjgMQAQAQgCASQgBAKgRAFQgIACgRACIgCgDQgLAAgTAGQgbAAgsAMQg1AQgNACIgoAgIgEARIgEADQgDAFAEAHIAGALIAKAQQAGAJAAAJQgBAEgDAAIgBgBg");
	this.shape_18.setTransform(18.5,81.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18,p:{rotation:0,x:18.5,y:81.8,scaleX:1,scaleY:1}},{t:this.shape_17,p:{rotation:0,y:76.2,x:22.3,scaleX:1,scaleY:1}},{t:this.shape_16,p:{rotation:0,x:8.3,y:81.3,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_18,p:{rotation:0,x:18.5,y:81.8,scaleX:1,scaleY:1}},{t:this.shape_17,p:{rotation:0,y:76.2,x:22.3,scaleX:1,scaleY:1}},{t:this.shape_16,p:{rotation:0,x:8.3,y:81.3,scaleX:1,scaleY:1}}]},8).to({state:[{t:this.shape_18,p:{rotation:15,x:17.2,y:77.9,scaleX:1,scaleY:1}},{t:this.shape_17,p:{rotation:15,y:73.5,x:22.3,scaleX:1,scaleY:1}},{t:this.shape_16,p:{rotation:15,x:7.5,y:74.8,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_18,p:{rotation:0,x:18.5,y:81.8,scaleX:1,scaleY:1}},{t:this.shape_17,p:{rotation:0,y:76.2,x:22.2,scaleX:1,scaleY:1}},{t:this.shape_16,p:{rotation:0,x:8.2,y:81.3,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_18,p:{rotation:15,x:17.2,y:77.9,scaleX:1,scaleY:1}},{t:this.shape_17,p:{rotation:15,y:73.5,x:22.2,scaleX:1,scaleY:1}},{t:this.shape_16,p:{rotation:15,x:7.4,y:74.8,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_18,p:{rotation:9,x:17.6,y:79.4,scaleX:1,scaleY:1}},{t:this.shape_17,p:{rotation:9,y:74.5,x:22.2,scaleX:1,scaleY:1}},{t:this.shape_16,p:{rotation:9,x:7.6,y:77.3,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_18,p:{rotation:24,x:17,y:75.5,scaleX:1,scaleY:1}},{t:this.shape_17,p:{rotation:24,y:71.9,x:22.6,scaleX:1,scaleY:1}},{t:this.shape_16,p:{rotation:24,x:7.8,y:70.9,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_18,p:{rotation:9,x:17.6,y:79.4,scaleX:1,scaleY:1}},{t:this.shape_17,p:{rotation:9,y:74.5,x:22.1,scaleX:1,scaleY:1}},{t:this.shape_16,p:{rotation:9,x:7.5,y:77.3,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.shape_18,p:{rotation:17.7,x:17,y:77.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_17,p:{rotation:17.7,y:72.9,x:22.3,scaleX:0.999,scaleY:0.999}},{t:this.shape_16,p:{rotation:17.7,x:7.4,y:73.5,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.shape_18,p:{rotation:2.7,x:18.1,y:81.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_17,p:{rotation:2.7,y:75.7,x:22.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_16,p:{rotation:2.7,x:7.9,y:80.1,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.shape_18,p:{rotation:17.7,x:17,y:77.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_17,p:{rotation:17.7,y:72.9,x:22.2,scaleX:0.999,scaleY:0.999}},{t:this.shape_16,p:{rotation:17.7,x:7.4,y:73.5,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.shape_18,p:{rotation:2.7,x:18.1,y:81.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_17,p:{rotation:2.7,y:75.7,x:22.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_16,p:{rotation:2.7,x:7.9,y:80.1,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.shape_18,p:{rotation:10,x:17.5,y:79.2,scaleX:0.999,scaleY:0.999}},{t:this.shape_17,p:{rotation:10,y:74.4,x:22.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_16,p:{rotation:10,x:7.5,y:76.9,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.shape_18,p:{rotation:0,x:18.5,y:81.8,scaleX:1,scaleY:1}},{t:this.shape_17,p:{rotation:0,y:76.2,x:22.3,scaleX:1,scaleY:1}},{t:this.shape_16,p:{rotation:0,x:8.3,y:81.3,scaleX:1,scaleY:1}}]},4).wait(1));

	// Leg1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#49A8DF").s().p("AgFAIQhFgCgXgDQgFgHAHgHIAGgEIACABQAnAIAzAGIBdAIQADAAABgEQAAADgFAEIgJAFQgigHg5gBg");
	this.shape_19.setTransform(30.4,63.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#49A8DF").s().p("AgsAHQgEgFABgCQAAgGAJgDIAjAJIAzAEIAAAFg");
	this.shape_20.setTransform(14.3,61.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#49A8DF").s().p("AgYAHQAAgCAEgCIAGgDIAagEIAHgEIAGAAIgbAQg");
	this.shape_21.setTransform(14.6,59.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#272425").s().p("ACRAuIglgEQgRgFgagBIgtgDIggABQgWgBgNABQgSgHglgCQgogCgRgFQgPgDgHgPQgBgLALgJIAKgEQAHgBADgCQAPgQAegCQARgCAkAFQAKADACACIABADIgsARIAVAHIAKgHIDDAUQAZAEAIAJQAJAIgCAHQgBAEgHAIQgEADgOAAIgLAAg");
	this.shape_22.setTransform(25.8,62.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{rotation:0,x:25.8,y:62.2,scaleX:1,scaleY:1}},{t:this.shape_21,p:{rotation:0,x:14.6,y:59.6,scaleX:1,scaleY:1}},{t:this.shape_20,p:{rotation:0,x:14.3,y:61.9,scaleX:1,scaleY:1}},{t:this.shape_19,p:{rotation:0,x:30.4,y:63.3,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_22,p:{rotation:15,x:27,y:58.4,scaleX:1,scaleY:1}},{t:this.shape_21,p:{rotation:15,x:16.8,y:53,scaleX:1,scaleY:1}},{t:this.shape_20,p:{rotation:15,x:16,y:55.1,scaleX:1,scaleY:1}},{t:this.shape_19,p:{rotation:15,x:31.2,y:60.7,scaleX:1,scaleY:1}}]},10).to({state:[{t:this.shape_22,p:{rotation:8.5,x:26.4,y:60.1,scaleX:1,scaleY:1}},{t:this.shape_21,p:{rotation:8.5,x:15.7,y:55.9,scaleX:1,scaleY:1}},{t:this.shape_20,p:{rotation:8.5,x:15,y:58,scaleX:1,scaleY:1}},{t:this.shape_19,p:{rotation:8.5,x:30.8,y:61.9,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_22,p:{rotation:14,x:27,y:58.7,scaleX:0.999,scaleY:0.999}},{t:this.shape_21,p:{rotation:14,x:16.7,y:53.4,scaleX:0.999,scaleY:0.999}},{t:this.shape_20,p:{rotation:14,x:15.8,y:55.6,scaleX:0.999,scaleY:0.999}},{t:this.shape_19,p:{rotation:14,x:31.2,y:60.9,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.shape_22,p:{rotation:8.7,x:26.4,y:60,scaleX:0.999,scaleY:0.999}},{t:this.shape_21,p:{rotation:8.7,x:15.7,y:55.7,scaleX:0.999,scaleY:0.999}},{t:this.shape_20,p:{rotation:8.7,x:15.1,y:57.9,scaleX:0.999,scaleY:0.999}},{t:this.shape_19,p:{rotation:8.7,x:30.8,y:61.7,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.shape_22,p:{rotation:14,x:27,y:58.7,scaleX:0.999,scaleY:0.999}},{t:this.shape_21,p:{rotation:14,x:16.7,y:53.4,scaleX:0.999,scaleY:0.999}},{t:this.shape_20,p:{rotation:14,x:15.9,y:55.5,scaleX:0.999,scaleY:0.999}},{t:this.shape_19,p:{rotation:14,x:31.2,y:60.8,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.shape_22,p:{rotation:9,x:26.5,y:59.9,scaleX:0.998,scaleY:0.998}},{t:this.shape_21,p:{rotation:9,x:15.8,y:55.6,scaleX:0.998,scaleY:0.998}},{t:this.shape_20,p:{rotation:9,x:15.1,y:57.7,scaleX:0.998,scaleY:0.998}},{t:this.shape_19,p:{rotation:9,x:30.8,y:61.7,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.shape_22,p:{rotation:14,x:26.9,y:58.6,scaleX:0.998,scaleY:0.998}},{t:this.shape_21,p:{rotation:14,x:16.7,y:53.4,scaleX:0.998,scaleY:0.998}},{t:this.shape_20,p:{rotation:14,x:15.8,y:55.5,scaleX:0.998,scaleY:0.998}},{t:this.shape_19,p:{rotation:14,x:31.1,y:60.8,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.shape_22,p:{rotation:8.2,x:26.3,y:60.1,scaleX:0.998,scaleY:0.998}},{t:this.shape_21,p:{rotation:8.2,x:15.6,y:55.9,scaleX:0.998,scaleY:0.998}},{t:this.shape_20,p:{rotation:8.2,x:15,y:58.1,scaleX:0.998,scaleY:0.998}},{t:this.shape_19,p:{rotation:8.2,x:30.7,y:61.8,scaleX:0.998,scaleY:0.998}}]},4).to({state:[{t:this.shape_22,p:{rotation:12.8,x:26.8,y:58.9,scaleX:0.998,scaleY:0.998}},{t:this.shape_21,p:{rotation:12.8,x:16.4,y:53.9,scaleX:0.998,scaleY:0.998}},{t:this.shape_20,p:{rotation:12.8,x:15.6,y:56,scaleX:0.998,scaleY:0.998}},{t:this.shape_19,p:{rotation:12.8,x:31,y:61,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.shape_22,p:{rotation:7.3,x:26.3,y:60.3,scaleX:0.997,scaleY:0.997}},{t:this.shape_21,p:{rotation:7.3,x:15.5,y:56.3,scaleX:0.997,scaleY:0.997}},{t:this.shape_20,p:{rotation:7.3,x:14.9,y:58.5,scaleX:0.997,scaleY:0.997}},{t:this.shape_19,p:{rotation:7.3,x:30.7,y:62,scaleX:0.997,scaleY:0.997}}]},4).to({state:[{t:this.shape_22,p:{rotation:13.8,x:26.9,y:58.7,scaleX:0.997,scaleY:0.997}},{t:this.shape_21,p:{rotation:13.8,x:16.6,y:53.5,scaleX:0.997,scaleY:0.997}},{t:this.shape_20,p:{rotation:13.8,x:15.8,y:55.6,scaleX:0.997,scaleY:0.997}},{t:this.shape_19,p:{rotation:13.8,x:31.1,y:60.9,scaleX:0.997,scaleY:0.997}}]},4).to({state:[{t:this.shape_22,p:{rotation:0,x:25.8,y:62.2,scaleX:1,scaleY:1}},{t:this.shape_21,p:{rotation:0,x:14.6,y:59.6,scaleX:1,scaleY:1}},{t:this.shape_20,p:{rotation:0,x:14.3,y:61.9,scaleX:1,scaleY:1}},{t:this.shape_19,p:{rotation:0,x:30.4,y:63.3,scaleX:1,scaleY:1}}]},4).wait(1));

	// ClawRight
	this.instance_1 = new lib.Rightarm();
	this.instance_1.setTransform(90.5,43.4,1,1,0,0,0,0,-14.5);

	this.instance_2 = new lib.rightclaw_mc();
	this.instance_2.setTransform(92,30.7,1,1,0,0,0,2.6,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{regY:-4.5,rotation:0,x:92,y:30.7,scaleX:1,scaleY:1,regX:2.6}},{t:this.instance_1,p:{regX:0,regY:-14.5,rotation:0,x:90.5,y:43.4,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_2,p:{regY:-4.7,rotation:15,x:98.3,y:33.2,scaleX:1,scaleY:1,regX:2.6}},{t:this.instance_1,p:{regX:-0.1,regY:-14.6,rotation:15,x:93.5,y:45.2,scaleX:1,scaleY:1}}]},10).to({state:[{t:this.instance_2,p:{regY:-4.5,rotation:12.5,x:97.3,y:32.8,scaleX:1,scaleY:1,regX:2.6}},{t:this.instance_1,p:{regX:-0.1,regY:-14.4,rotation:12.5,x:93,y:45,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_2,p:{regY:-4.5,rotation:25.3,x:102.3,y:36.3,scaleX:0.999,scaleY:0.999,regX:2.6}},{t:this.instance_1,p:{regX:0,regY:-14.4,rotation:25.3,x:95.4,y:47.2,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.instance_2,p:{regY:-4.6,rotation:20.3,x:100.5,y:34.8,scaleX:0.999,scaleY:0.999,regX:2.6}},{t:this.instance_1,p:{regX:-0.1,regY:-14.4,rotation:20.3,x:94.5,y:46.2,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_2,p:{regY:-4.7,rotation:0.2,x:92.2,y:30.6,scaleX:0.998,scaleY:0.998,regX:2.5}},{t:this.instance_1,p:{regX:0,regY:-14.4,rotation:0.2,x:90.7,y:43.6,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.instance_2,p:{regY:-4.7,rotation:-11.6,x:87,y:29.8,scaleX:0.998,scaleY:0.998,regX:2.6}},{t:this.instance_1,p:{regX:-0.1,regY:-14.5,rotation:-11.6,x:88,y:42.6,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.instance_2,p:{regY:-4.7,rotation:-14.8,x:85.4,y:29.5,scaleX:0.998,scaleY:0.998,regX:2.5}},{t:this.instance_1,p:{regX:0,regY:-14.6,rotation:-14.8,x:87.3,y:42.2,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_2,p:{regY:-4.6,rotation:-6.5,x:89.3,y:29.9,scaleX:0.998,scaleY:0.998,regX:2.5}},{t:this.instance_1,p:{regX:-0.1,regY:-14.4,rotation:-6.5,x:89.1,y:42.8,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_2,p:{regY:-4.6,rotation:-5.3,x:90,y:30,scaleX:0.998,scaleY:0.998,regX:2.6}},{t:this.instance_1,p:{regX:0,regY:-14.6,rotation:-5.3,x:89.6,y:42.7,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.instance_2,p:{regY:-4.5,rotation:-2,x:91.4,y:30.4,scaleX:0.997,scaleY:0.997,regX:2.6}},{t:this.instance_1,p:{regX:-0.1,regY:-14.5,rotation:-2,x:90.2,y:43.1,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_2,p:{regY:-4.5,rotation:3.5,x:94,y:31.2,scaleX:0.997,scaleY:0.997,regX:2.6}},{t:this.instance_1,p:{regX:-0.1,regY:-14.4,rotation:3.5,x:91.5,y:43.9,scaleX:0.997,scaleY:0.997}}]},3).to({state:[{t:this.instance_2,p:{regY:-4.5,rotation:0.2,x:92.5,y:30.8,scaleX:0.997,scaleY:0.997,regX:2.6}},{t:this.instance_1,p:{regX:-0.1,regY:-14.5,rotation:0.2,x:90.8,y:43.5,scaleX:0.997,scaleY:0.997}}]},3).to({state:[{t:this.instance_2,p:{regY:-4.5,rotation:-5.5,x:89.9,y:30.2,scaleX:0.997,scaleY:0.997,regX:2.6}},{t:this.instance_1,p:{regX:-0.1,regY:-14.5,rotation:-5.5,x:89.5,y:42.9,scaleX:0.997,scaleY:0.997}}]},2).wait(5));

	// FISHY
	this.instance_3 = new lib.Food();
	this.instance_3.setTransform(145,12);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).wait(1).to({x:139.6,y:15.2},0).wait(1).to({x:134,y:18.2},0).wait(1).to({x:128.2,y:20.7},0).wait(1).to({x:122.1,y:22.2},0).wait(1).to({x:117.6,y:20.6},0).wait(1).to({x:113.7,y:17.8},0).wait(1).to({x:109.8,y:15},0).wait(1).to({x:105.5,y:12.8},0).wait(1).to({x:100.8,y:12},0).wait(1).to({x:95.5,y:12.9},0).wait(1).to({x:90.4,y:14.7},0).wait(1).to({x:85.4,y:16.8},0).wait(1).to({x:80.3,y:18.5},0).wait(1).to({x:75,y:19.1},0).wait(1).to({x:71,y:18.6},0).wait(1).to({x:67.4,y:17.5},0).wait(1).to({x:63.9,y:15.9},0).wait(1).to({x:60.3,y:14.8},0).wait(1).to({x:56.4,y:14.2},0).wait(1).to({x:52.2,y:14.1},0).wait(1).to({x:48.4,y:15},0).wait(1).to({x:44.7,y:16.6},0).wait(1).to({x:40.9,y:17.6},0).wait(1).to({x:36.7,y:17.9},0).wait(1).to({x:31.9,y:16.7},0).wait(1).to({x:28.3,y:13.4},0).wait(1).to({x:25,y:9.9},0).wait(1).to({x:20.5,y:7.6},0).wait(1).to({x:15.7,y:7.1},0).wait(1).to({x:9.8,y:7.9},0).wait(1).to({x:4.1,y:9.7},0).wait(1).to({x:-1.3,y:12.3},0).wait(1).to({x:-6.4,y:15.4},0).wait(1).to({x:-11.1,y:19},0).to({_off:true},1).wait(4));

	// ClawLeft
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3681C1").s().p("AAHApQgFgDgFgJQgHgJgGgEIgPgaQgHgRAHgOIABAAIALAJQAGAGABAIQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBAAIAsA1QADgBADAEg");
	this.shape_23.setTransform(52.6,49.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3681C1").s().p("AgJAIQgKgPgBgQQADgIAIgDIACABQADABABAEIADAFIABACQAQAaAEASIgLAMIgTgbg");
	this.shape_24.setTransform(46.4,41.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3681C1").s().p("AgZA6QgGgEgIABQgCABgEAAQAAgMACgRIAFgdIAIgeQAFgSALgFQACgEAEgBIANgFIAcAIQAFAHAHANQAFAOgLARIgVAYQgVAhgMAOIgKgHg");
	this.shape_25.setTransform(48.9,31.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#272425").s().p("AASCOQgKgUgXgaQgEgDgDgFIgEgLIAAgMQgwgvAEhGQAFgkASghQAEgQANgKQAOgLAQAAQATAAAOAOQAPAOAAAUQAAAFgCAHQgDAXgUAaQgXAcgMAPQABAFAKAOQAFAMAAALQAFAHAHAFIAMAKIAIAZIAiApQAFAcgPAFQgEACgFAAQgPAAgSgRg");
	this.shape_26.setTransform(49.8,40.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3681C1").s().p("Ag2BUQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAEgCQAQgcADgbQAIgIADgBIAFADQADABADAAQASgUAXgkIAGgNQAEgIgBgGIgFgDQgRASgrAiQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgEIAlgcQAXgRAOgSIACABQAFAygWArQgXAsgpAWQgPADgKAGg");
	this.shape_27.setTransform(59,20.2);

	this.instance_4 = new lib.Mesh();
	this.instance_4.setTransform(45.4,4.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#272425").s().p("AhiBsIgCgRQgBgJgDgHQgMghAFghQAFggAUgVIAJgLQAgghAQgJIAMgLIAQgIQAIgFAHgCQAcgIAOgCIAPACIAPADQAZALADAPIAAAGQgCADgEAAIgGgDQgSADgSAQQgKAKgSAWIgGAQQgEAKAAAGQAFAAAHgGQAIgGAFgCQAGgEAHgIIAKgNIAOgPIAHAAIACACQADAJAAAMIgBAXQgBARgBAjQgDAggPAPIgmAeIgYAPQgOAIgKACQhFgDgYgWg");
	this.shape_28.setTransform(55.2,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28,p:{rotation:0,x:55.2,y:16.4,scaleX:1,scaleY:1}},{t:this.instance_4,p:{rotation:0,x:45.4,y:4.2,scaleX:1,scaleY:1}},{t:this.shape_27,p:{rotation:0,x:59,y:20.2,scaleX:1,scaleY:1}},{t:this.shape_26,p:{rotation:0,x:49.8,y:40.2,scaleX:1,scaleY:1}},{t:this.shape_25,p:{rotation:0,x:48.9,y:31.7,scaleX:1,scaleY:1}},{t:this.shape_24,p:{rotation:0,x:46.4,y:41.6,scaleX:1,scaleY:1}},{t:this.shape_23,p:{rotation:0,x:52.6,y:49.5,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_28,p:{rotation:0,x:55.2,y:16.4,scaleX:1,scaleY:1}},{t:this.instance_4,p:{rotation:0,x:45.4,y:4.2,scaleX:1,scaleY:1}},{t:this.shape_27,p:{rotation:0,x:59,y:20.2,scaleX:1,scaleY:1}},{t:this.shape_26,p:{rotation:0,x:49.8,y:40.2,scaleX:1,scaleY:1}},{t:this.shape_25,p:{rotation:0,x:48.9,y:31.7,scaleX:1,scaleY:1}},{t:this.shape_24,p:{rotation:0,x:46.4,y:41.6,scaleX:1,scaleY:1}},{t:this.shape_23,p:{rotation:0,x:52.6,y:49.5,scaleX:1,scaleY:1}}]},9).to({state:[{t:this.shape_28,p:{rotation:15,x:65,y:17.7,scaleX:1,scaleY:1}},{t:this.instance_4,p:{rotation:15,x:58.7,y:3.3,scaleX:1,scaleY:1}},{t:this.shape_27,p:{rotation:15,x:67.7,y:22.3,scaleX:1,scaleY:1}},{t:this.shape_26,p:{rotation:15,x:53.6,y:39.2,scaleX:1,scaleY:1}},{t:this.shape_25,p:{rotation:15,x:55,y:30.8,scaleX:1,scaleY:1}},{t:this.shape_24,p:{rotation:15,x:50,y:39.8,scaleX:1,scaleY:1}},{t:this.shape_23,p:{rotation:15,x:53.9,y:49,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_28,p:{rotation:10.7,x:62.2,y:17,scaleX:1,scaleY:1}},{t:this.instance_4,p:{rotation:10.7,x:54.8,y:3.2,scaleX:1,scaleY:1}},{t:this.shape_27,p:{rotation:10.7,x:65.2,y:21.4,scaleX:1,scaleY:1}},{t:this.shape_26,p:{rotation:10.7,x:52.5,y:39.3,scaleX:1,scaleY:1}},{t:this.shape_25,p:{rotation:10.7,x:53.2,y:30.8,scaleX:1,scaleY:1}},{t:this.shape_24,p:{rotation:10.7,x:48.9,y:40.1,scaleX:1,scaleY:1}},{t:this.shape_23,p:{rotation:10.7,x:53.5,y:49,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.shape_28,p:{rotation:26.3,x:71.9,y:20.3,scaleX:0.999,scaleY:0.999}},{t:this.instance_4,p:{rotation:26.3,x:68.5,y:5,scaleX:0.999,scaleY:0.999}},{t:this.shape_27,p:{rotation:26.3,x:73.7,y:25.4,scaleX:0.999,scaleY:0.999}},{t:this.shape_26,p:{rotation:26.3,x:56.6,y:39.2,scaleX:0.999,scaleY:0.999}},{t:this.shape_25,p:{rotation:26.3,x:59.6,y:31.2,scaleX:0.999,scaleY:0.999}},{t:this.shape_24,p:{rotation:26.3,x:52.9,y:39,scaleX:0.999,scaleY:0.999}},{t:this.shape_23,p:{rotation:26.3,x:55,y:48.8,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.shape_28,p:{rotation:20.5,x:68.4,y:18.8,scaleX:0.999,scaleY:0.999}},{t:this.instance_4,p:{rotation:20.5,x:63.5,y:4,scaleX:0.999,scaleY:0.999}},{t:this.shape_27,p:{rotation:20.5,x:70.7,y:23.7,scaleX:0.999,scaleY:0.999}},{t:this.shape_26,p:{rotation:20.5,x:55,y:39.2,scaleX:0.999,scaleY:0.999}},{t:this.shape_25,p:{rotation:20.5,x:57.2,y:30.9,scaleX:0.999,scaleY:0.999}},{t:this.shape_24,p:{rotation:20.5,x:51.4,y:39.4,scaleX:0.999,scaleY:0.999}},{t:this.shape_23,p:{rotation:20.5,x:54.4,y:48.9,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.shape_28,p:{rotation:5.2,x:58.6,y:16.6,scaleX:0.998,scaleY:0.998}},{t:this.instance_4,p:{rotation:5.2,x:50,y:3.6,scaleX:0.998,scaleY:0.998}},{t:this.shape_27,p:{rotation:5.2,x:62.1,y:20.8,scaleX:0.998,scaleY:0.998}},{t:this.shape_26,p:{rotation:5.2,x:51.1,y:39.8,scaleX:0.998,scaleY:0.998}},{t:this.shape_25,p:{rotation:5.2,x:51,y:31.2,scaleX:0.998,scaleY:0.998}},{t:this.shape_24,p:{rotation:5.2,x:47.6,y:40.9,scaleX:0.998,scaleY:0.998}},{t:this.shape_23,p:{rotation:5.2,x:53,y:49.3,scaleX:0.998,scaleY:0.998}}]},3).to({state:[{t:this.shape_28,p:{rotation:-0.9,x:54.7,y:16.5,scaleX:0.998,scaleY:0.998}},{t:this.instance_4,p:{rotation:-0.9,x:44.7,y:4.5,scaleX:0.998,scaleY:0.998}},{t:this.shape_27,p:{rotation:-0.9,x:58.6,y:20.2,scaleX:0.998,scaleY:0.998}},{t:this.shape_26,p:{rotation:-0.9,x:49.7,y:40.3,scaleX:0.998,scaleY:0.998}},{t:this.shape_25,p:{rotation:-0.9,x:48.7,y:31.8,scaleX:0.998,scaleY:0.998}},{t:this.shape_24,p:{rotation:-0.9,x:46.3,y:41.8,scaleX:0.998,scaleY:0.998}},{t:this.shape_23,p:{rotation:-0.9,x:52.6,y:49.6,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.shape_28,p:{rotation:-20.8,x:41.9,y:19,scaleX:0.997,scaleY:0.997}},{t:this.instance_4,p:{rotation:-20.8,x:28.4,y:11.2,scaleX:0.997,scaleY:0.997}},{t:this.shape_27,p:{rotation:-20.8,x:46.8,y:21.2,scaleX:0.997,scaleY:0.997}},{t:this.shape_26,p:{rotation:-20.8,x:45.3,y:43.1,scaleX:0.997,scaleY:0.997}},{t:this.shape_25,p:{rotation:-20.8,x:41.4,y:35.5,scaleX:0.997,scaleY:0.997}},{t:this.shape_24,p:{rotation:-20.8,x:42.6,y:45.6,scaleX:0.997,scaleY:0.997}},{t:this.shape_23,p:{rotation:-20.8,x:51.2,y:50.8,scaleX:0.997,scaleY:0.997}}]},3).to({state:[{t:this.shape_28,p:{rotation:-28.9,x:37.1,y:21.3,scaleX:0.997,scaleY:0.997}},{t:this.instance_4,p:{rotation:-28.9,x:22.6,y:15.4,scaleX:0.997,scaleY:0.997}},{t:this.shape_27,p:{rotation:-28.9,x:42.3,y:22.8,scaleX:0.997,scaleY:0.997}},{t:this.shape_26,p:{rotation:-28.9,x:43.8,y:44.7,scaleX:0.997,scaleY:0.997}},{t:this.shape_25,p:{rotation:-28.9,x:39,y:37.6,scaleX:0.997,scaleY:0.997}},{t:this.shape_24,p:{rotation:-28.9,x:41.6,y:47.5,scaleX:0.997,scaleY:0.997}},{t:this.shape_23,p:{rotation:-28.9,x:50.8,y:51.4,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.shape_28,p:{rotation:-5.8,x:51.4,y:16.8,scaleX:0.997,scaleY:0.997}},{t:this.instance_4,p:{rotation:-5.8,x:40.5,y:5.6,scaleX:0.997,scaleY:0.997}},{t:this.shape_27,p:{rotation:-5.8,x:55.6,y:20.1,scaleX:0.997,scaleY:0.997}},{t:this.shape_26,p:{rotation:-5.8,x:48.5,y:40.9,scaleX:0.997,scaleY:0.997}},{t:this.shape_25,p:{rotation:-5.8,x:46.8,y:32.5,scaleX:0.997,scaleY:0.997}},{t:this.shape_24,p:{rotation:-5.8,x:45.3,y:42.7,scaleX:0.997,scaleY:0.997}},{t:this.shape_23,p:{rotation:-5.8,x:52.2,y:49.8,scaleX:0.997,scaleY:0.997}}]},3).to({state:[{t:this.shape_28,p:{rotation:-20.8,x:41.9,y:19.1,scaleX:0.997,scaleY:0.997}},{t:this.instance_4,p:{rotation:-20.8,x:28.4,y:11.2,scaleX:0.997,scaleY:0.997}},{t:this.shape_27,p:{rotation:-20.8,x:46.8,y:21.3,scaleX:0.997,scaleY:0.997}},{t:this.shape_26,p:{rotation:-20.8,x:45.2,y:43.2,scaleX:0.997,scaleY:0.997}},{t:this.shape_25,p:{rotation:-20.8,x:41.4,y:35.5,scaleX:0.997,scaleY:0.997}},{t:this.shape_24,p:{rotation:-20.8,x:42.6,y:45.7,scaleX:0.997,scaleY:0.997}},{t:this.shape_23,p:{rotation:-20.8,x:51.2,y:50.9,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.shape_28,p:{rotation:-35.8,x:33.3,y:23.7,scaleX:0.997,scaleY:0.997}},{t:this.instance_4,p:{rotation:-35.8,x:18.2,y:19.6,scaleX:0.997,scaleY:0.997}},{t:this.shape_27,p:{rotation:-35.8,x:38.6,y:24.6,scaleX:0.997,scaleY:0.997}},{t:this.shape_26,p:{rotation:-35.8,x:42.8,y:46.1,scaleX:0.997,scaleY:0.997}},{t:this.shape_25,p:{rotation:-35.8,x:37.1,y:39.7,scaleX:0.997,scaleY:0.997}},{t:this.shape_24,p:{rotation:-35.8,x:40.9,y:49.2,scaleX:0.997,scaleY:0.997}},{t:this.shape_23,p:{rotation:-35.8,x:50.5,y:52,scaleX:0.997,scaleY:0.997}}]},3).to({state:[{t:this.shape_28,p:{rotation:-27,x:38.3,y:20.9,scaleX:0.996,scaleY:0.996}},{t:this.instance_4,p:{rotation:-27,x:24,y:14.5,scaleX:0.996,scaleY:0.996}},{t:this.shape_27,p:{rotation:-27,x:43.4,y:22.5,scaleX:0.996,scaleY:0.996}},{t:this.shape_26,p:{rotation:-27,x:44.2,y:44.4,scaleX:0.996,scaleY:0.996}},{t:this.shape_25,p:{rotation:-27,x:39.6,y:37.2,scaleX:0.996,scaleY:0.996}},{t:this.shape_24,p:{rotation:-27,x:41.9,y:47.2,scaleX:0.996,scaleY:0.996}},{t:this.shape_23,p:{rotation:-27,x:50.9,y:51.4,scaleX:0.996,scaleY:0.996}}]},1).to({state:[{t:this.shape_28,p:{rotation:-13.6,x:46.5,y:17.7,scaleX:0.996,scaleY:0.996}},{t:this.instance_4,p:{rotation:-13.6,x:34.1,y:8.2,scaleX:0.996,scaleY:0.996}},{t:this.shape_27,p:{rotation:-13.6,x:51.1,y:20.5,scaleX:0.996,scaleY:0.996}},{t:this.shape_26,p:{rotation:-13.6,x:46.8,y:42,scaleX:0.996,scaleY:0.996}},{t:this.shape_25,p:{rotation:-13.6,x:44,y:33.9,scaleX:0.996,scaleY:0.996}},{t:this.shape_24,p:{rotation:-13.6,x:43.9,y:44.1,scaleX:0.996,scaleY:0.996}},{t:this.shape_23,p:{rotation:-13.6,x:51.7,y:50.3,scaleX:0.996,scaleY:0.996}}]},4).to({state:[{t:this.shape_28,p:{rotation:0,x:55.2,y:16.4,scaleX:1,scaleY:1}},{t:this.instance_4,p:{rotation:0,x:45.4,y:4.2,scaleX:1,scaleY:1}},{t:this.shape_27,p:{rotation:0,x:59,y:20.2,scaleX:1,scaleY:1}},{t:this.shape_26,p:{rotation:0,x:49.8,y:40.2,scaleX:1,scaleY:1}},{t:this.shape_25,p:{rotation:0,x:48.9,y:31.7,scaleX:1,scaleY:1}},{t:this.shape_24,p:{rotation:0,x:46.4,y:41.6,scaleX:1,scaleY:1}},{t:this.shape_23,p:{rotation:0,x:52.6,y:49.5,scaleX:1,scaleY:1}}]},4).wait(1));

	// EyeRight
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(77.1,44.7,1,1,0,0,0,3.6,7.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#272425").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgEADABQAFgBADAEQADAEAAADQAAAEgDAEQgDAEgFAAQgDAAgEgEg");
	this.shape_29.setTransform(80.9,40.2,1,1,15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#272425").ss(2,0,0,4).p("AAjAAQAAAOgKALQgLAKgOAAQgNAAgLgKQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANg");
	this.shape_30.setTransform(80.4,40.7,1,1,15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAOgKALQgLAKgOAAQgNAAgLgKg");
	this.shape_31.setTransform(80.4,40.7,1,1,15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3681C1").s().p("AgJAoQADgDAFgOQAEgOAAgFQABgFgGgkIAEgGIAEAIQAEAKAAAFQABAHgCAMQgCALgDAHIgFARQgDAKgCAAQgGAAADgEg");
	this.shape_32.setTransform(79.1,48.3,1,1,15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#272425").s().p("AgfAwQAOgMAFgWQABgFgHgfQgFgYAKgNIADgCQAFgCAFACQAFACAEAEQATAbAEAiQgCAMgFAMIgMATQgOAOgJAAQgMAAgJgPg");
	this.shape_33.setTransform(79.3,47.4,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.shape_33,p:{rotation:15,x:79.3,y:47.4}},{t:this.shape_32,p:{rotation:15,x:79.1,y:48.3}},{t:this.shape_31,p:{rotation:15,x:80.4,y:40.7}},{t:this.shape_30,p:{rotation:15,x:80.4,y:40.7}},{t:this.shape_29,p:{rotation:15,x:80.9,y:40.2}}]},1).to({state:[{t:this.shape_33,p:{rotation:0,x:77.9,y:46.3}},{t:this.shape_32,p:{rotation:0,x:78,y:47.3}},{t:this.shape_31,p:{rotation:0,x:77.2,y:39.6}},{t:this.shape_30,p:{rotation:0,x:77.2,y:39.6}},{t:this.shape_29,p:{rotation:0,x:77.6,y:39}}]},17).to({state:[{t:this.shape_33,p:{rotation:-15,x:76.3,y:46.5}},{t:this.shape_32,p:{rotation:-15,x:76.6,y:47.4}},{t:this.shape_31,p:{rotation:-15,x:73.9,y:40.1}},{t:this.shape_30,p:{rotation:-15,x:73.9,y:40.1}},{t:this.shape_29,p:{rotation:-15,x:74.1,y:39.4}}]},10).to({state:[{t:this.shape_33,p:{rotation:0,x:77.7,y:47.2}},{t:this.shape_32,p:{rotation:0,x:77.8,y:48.1}},{t:this.shape_31,p:{rotation:0,x:77,y:40.4}},{t:this.shape_30,p:{rotation:0,x:77,y:40.4}},{t:this.shape_29,p:{rotation:0,x:77.4,y:39.8}}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:true},1).wait(37));

	// EyeLeft
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(61.8,45.2,1,1,0,0,0,4.5,7.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#272425").s().p("AgHAIQgDgEAAgEQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgEgDg");
	this.shape_34.setTransform(65.4,41.2,1,1,15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#272425").ss(2,0,0,4).p("AAjAAQAAAOgKALQgLAKgOAAQgNAAgLgKQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANg");
	this.shape_35.setTransform(65,41.9,1,1,15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAOgKALQgLAKgOAAQgNAAgLgKg");
	this.shape_36.setTransform(65,41.9,1,1,15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3681C1").s().p("AAAAfIgEgKQgJgOACgOQACgPAJgMIADgFIADAAIACADIgIARQgEALAAAIQAEAOAMAXIgDACIgDABQgDgCgDgHg");
	this.shape_37.setTransform(61.7,48.3,1,1,15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#272425").s().p("AAAA6QgEgEgKgKIgLgeQgHgRAIgOIAQgaQAIgPANgDIAGABQAFACACAFQADAFgBAGQgBAGgNAWQgJAOAFAMQAIAUAMAIQgFAWgLAAQgHAAgHgEg");
	this.shape_38.setTransform(61.8,47.9,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.shape_38,p:{rotation:15,x:61.8,y:47.9}},{t:this.shape_37,p:{rotation:15,x:61.7,y:48.3}},{t:this.shape_36,p:{rotation:15,x:65,y:41.9}},{t:this.shape_35,p:{rotation:15,x:65,y:41.9}},{t:this.shape_34,p:{rotation:15,x:65.4,y:41.2}}]},1).to({state:[{t:this.shape_38,p:{rotation:-15,x:58.9,y:47.9}},{t:this.shape_37,p:{rotation:-15,x:59,y:48.2}},{t:this.shape_36,p:{rotation:-15,x:58.6,y:41.1}},{t:this.shape_35,p:{rotation:-15,x:58.6,y:41.1}},{t:this.shape_34,p:{rotation:-15,x:58.6,y:40.3}}]},17).to({state:[{t:this.shape_38,p:{rotation:-30,x:57.4,y:48.4}},{t:this.shape_37,p:{rotation:-30,x:57.6,y:48.7}},{t:this.shape_36,p:{rotation:-30,x:55.4,y:41.9}},{t:this.shape_35,p:{rotation:-30,x:55.4,y:41.9}},{t:this.shape_34,p:{rotation:-30,x:55.2,y:41.1}}]},10).to({state:[{t:this.shape_38,p:{rotation:0,x:60.3,y:47.7}},{t:this.shape_37,p:{rotation:0,x:60.3,y:48.1}},{t:this.shape_36,p:{rotation:0,x:61.8,y:41.1}},{t:this.shape_35,p:{rotation:0,x:61.8,y:41.1}},{t:this.shape_34,p:{rotation:0,x:62,y:40.3}}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:true},1).wait(37));

	// BaseShell
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#272425").s().p("AgvDhQhaAAhhhAQgQgLgJgEQgJAIgMAAQgNAAgJgKQgKgJAAgNQAAgGADgGQgDgHgKgGIgRgLIgwgMQgEgEgBgGQgBgHACgGIABAAQgQgDgDgKQgDgKAOgMQAOgMAWgEIABAAQAEgVAUgHIAKgGIAFgTIABAAQgSgKACgMQABgKAPgFQAOgEATACIAAAAIADABIgCgBIgBAAQAEgBALgIQAJgHAJABQAGAAADgJIAGgJQADgEANgCQAMgDADgHQACgMADgEQACgCAPgDQAMgDADgHQgFgLACgKQABgLAIgGQAKgGAMADQAMAEAIALIAFAKIgBgDIATgFQgEgIAAgHQAAgHAEgDQAKgIAQALQAIAFADAFQAFAFADAHIABgDQAJgCARAAIAcgBQAmACAPAEIABAAIABgEQAFgLAKgFQAKgFAIAEQAMAGAAAQIABgBIgBACIAAABQABAGALACQAHAAAHADIALAGIAAABQAKgLAQAAQAMAAAJAHQAJAHAAAKQAAAFgEAGQABACAEACIAFAEIAFgBIAHAAQAPAGAEAJQAAAEACABIATACIAGAFIAEAGQAGgCAEAAQALAAAHAHQAIAGAAAKQAAAEgCAEIAEASQACAFAFACIADAAIAOAQQAAACADADQAJAAALAMQAEAHAEAPQAGAKAJAFIABAAIAFgBQAOgCALAGQAKAFABAJQABANgOAIQgEAaggAMIgUAIQgNAFgHAEQAMANgCAMQgCAOgNAFQgJADgXAAIgVABQgPABgFgCQgJADgQALQgQAKgJAEQgEADgIADIgMAFQhUAihiAAIgigBg");
	this.shape_39.setTransform(69,71.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73,60,135.1,108.5);


// symbols:
(lib.Mesh = function() {
	this.initialize(img.Mesh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,24);


(lib.Mesh_1 = function() {
	this.initialize(img.Mesh_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,25);


(lib.Mesh_2 = function() {
	this.initialize(img.Mesh_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,41);


(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,6);


(lib.Path_1 = function() {
	this.initialize(img.Path_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.Path_10 = function() {
	this.initialize(img.Path_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


(lib.Path_11 = function() {
	this.initialize(img.Path_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,7);


(lib.Path_2 = function() {
	this.initialize(img.Path_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,1);


(lib.Path_4 = function() {
	this.initialize(img.Path_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,2);


(lib.Path_5 = function() {
	this.initialize(img.Path_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,1);


(lib.Path_6 = function() {
	this.initialize(img.Path_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,2);


(lib.Path_7 = function() {
	this.initialize(img.Path_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,5);


(lib.Path_8 = function() {
	this.initialize(img.Path_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,9);


(lib.Path_9 = function() {
	this.initialize(img.Path_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,11);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272425").s().p("AgHAIQgDgEAAgEQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgEgDg");
	this.shape.setTransform(4.7,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#272425").ss(2,0,0,4).p("AAjAAQAAAOgKALQgLAKgOAAQgNAAgLgKQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANg");
	this.shape_1.setTransform(4.5,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAOgKALQgLAKgOAAQgNAAgLgKg");
	this.shape_2.setTransform(4.5,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3681C1").s().p("AAAAfIgEgKQgJgOACgOQACgPAJgMIADgFIADAAIACADIgIARQgEALAAAIQAEAOAMAXIgDACIgDABQgDgCgDgHg");
	this.shape_3.setTransform(3,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#272425").s().p("AAAA6QgEgEgKgKIgLgeQgHgRAIgOIAQgaQAIgPANgDIAGABQAFACACAFQADAFgBAGQgBAGgNAWQgJAOAFAMQAIAUAMAIQgFAWgLAAQgHAAgHgEg");
	this.shape_4.setTransform(3,10.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,9.2,17.5);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272425").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgEADABQAFgBADAEQADAEAAADQAAAEgDAEQgDAEgFAAQgDAAgEgEg");
	this.shape.setTransform(4,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#272425").ss(2,0,0,4).p("AAjAAQAAAOgKALQgLAKgOAAQgNAAgLgKQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANg");
	this.shape_1.setTransform(3.6,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAOgKALQgLAKgOAAQgNAAgLgKg");
	this.shape_2.setTransform(3.6,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3681C1").s().p("AgJAoQADgDAFgOQAEgOAAgFQABgFgGgkIAEgGIAEAIQAEAKAAAFQABAHgCAMQgCALgDAHIgFARQgDAKgCAAQgGAAADgEg");
	this.shape_3.setTransform(4.3,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#272425").s().p("AgfAwQAOgMAFgWQABgFgHgfQgFgYAKgNIADgCQAFgCAFACQAFACAEAEQATAbAEAiQgCAMgFAMIgMATQgOAOgJAAQgMAAgJgPg");
	this.shape_4.setTransform(4.2,10.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.2,17.7);


(lib.rightclaw_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Mesh_1();
	this.instance.setTransform(-8.7,-27.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272425").s().p("AgSCFQgegGgNgYQgMgWgMgmQgMgjgDgNQgGgcAFgVIAFgXQACgDAEACIAFADQAJAVATAYQANAPAcAYQALgRAAgyQAAgmgZgUIgLgIQgHgFgCgFIAKgIQAjgBAdANQAgANAUAZQAQAUAHAgQAEAVABAhQAAATgMAcQgMAegCALIgBAAQgGASgRAMQgRALgVAAQgSAAgQgKg");
	this.shape.setTransform(0,-14.4);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-28.7,20.9,28.7);


(lib.Rightarm = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3681C1").s().p("AglAkIgKgCQAEgGALgHQAMgHAEgFQAVgQAWgbIANgHIAIAEQgBALgLAMIgUATQgSARgfAUQgCgFgCgBg");
	this.shape.setTransform(-0.1,-6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3681C1").s().p("AgIAVQgCgGgBgKIAAgQQACgEADgDIAGgFIAHAAQAEAFABAMIgBARQgCAFgFAIg");
	this.shape_1.setTransform(4.6,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3681C1").s().p("AgHAeQgJgRgKgIQgKgIACgQQABgNAJgMQACgFAGgCIAKgDQASgBAHAJQAHAQAEAZIAGAoIgGASIgVACQgGgGgKgTg");
	this.shape_2.setTransform(2.5,-22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#272425").s().p("AhHCNQgIgHACgbQA6ghAbgqIAHgFIgBgVQAAgLADgIQgEgOgRgYQgTgXgDgRIgBAAIANggQAKgSAJgBQAUgCAGACQAPADAVARQgCAOAHAPQAJAXgEAhQgFApABALQgDAYgNAVQgMAUgRAMQgFAEgXAOQgRAKgJAKQgXAOgMAAQgGAAgEgDg");
	this.shape_3.setTransform(0,-14.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-28.8,15.8,28.9);


(lib.Food = function() {
	this.initialize();

	// FlashAICB
	this.instance = new lib.Path();
	this.instance.setTransform(-10.1,-1.9);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(-7.7,2.6);

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(-7,2.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#393739").s().p("AAAAGIgCgCIgCgEIAAAAIABgBIAAgBIABgBIAAgBIABAAIABAAIAAgBIAAAAIABABIABAAIAAAAIABAAIABABIAAAAIAAABIABACIAAABIAAABIgBABIAAABIgBABIgBAAIgBAAIgBABg");
	this.shape.setTransform(-7.6,-1.3);

	this.instance_3 = new lib.Path_4();
	this.instance_3.setTransform(-8.2,-2.1);

	this.instance_4 = new lib.Path_5();
	this.instance_4.setTransform(-0.2,2.3);

	this.instance_5 = new lib.Path_6();
	this.instance_5.setTransform(-5.2,2.7);

	this.instance_6 = new lib.Path_7();
	this.instance_6.setTransform(-8.7,-0.2);

	this.instance_7 = new lib.Path_8();
	this.instance_7.setTransform(-10,-4.5);

	this.instance_8 = new lib.Path_9();
	this.instance_8.setTransform(3.3,-5.5);

	this.instance_9 = new lib.Path_10();
	this.instance_9.setTransform(-5.8,-9.4);

	this.instance_10 = new lib.Path_11();
	this.instance_10.setTransform(-5.7,2.6);

	this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.1,-9.4,20.4,19);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;