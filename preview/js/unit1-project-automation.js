const plan2Topics=[
['برامج إدارة المشروعات','اختيار برنامج إدارة المشروع يعتمد أساسًا على حجم الفريق وحجم المشروع. ويستخدم الدرس GanttProject للمشروعات متوسطة الحجم والمهام المتسلسلة المحددة بالأيام.'],
['مخطط جانت','مخطط جانت رسم تخطيطي لجدول زمني يساعد في التخطيط والتنسيق وتتبع مهام المشروع.'],
['التخطيط الزمني','يأتي التخطيط الزمني بعد تحديد نطاق المشروع وأنشطته ومهامه، ويقدّر مدير المشروع مدة كل مهمة بالتعاون مع الفريق.'],
['بناء خطة المشروع','تبدأ الخطة بضبط خصائص المشروع ثم إدراج المهام وتعديل خصائصها بما يخدم الجدول الزمني.'],
['المهام الرئيسة والفرعية','يمكن تقسيم المهمة الرئيسة إلى مهام فرعية لتسهيل التنظيم وتتبع التقدم؛ مثل تقسيم الإخراج إلى الموسيقى والمشهد والأزياء.'],
['ترتيب وأولوية المهام','تحتاج الأولويات إلى تسلسل منطقي وتقدير مدة ووثائق واضحة. ويمكن استخدام تحليل ABC أو مصفوفة أيزنهاور، كما يتيح GanttProject تعيين أولوية للمهمة.']
];
const plan2Diag=[
['ما أهم معيار لاختيار برنامج إدارة المشروع؟',['حجم الفريق وحجم المشروع','لون الواجهة','اسم مدير المشروع'],0,0],
['مخطط جانت يساعد أساسًا في:',['التخطيط والتنسيق وتتبع المهام','كتابة السيناريو','حساب الرواتب فقط'],0,1],
['متى يأتي التخطيط الزمني؟',['قبل تحديد النطاق','بعد تحديد النطاق والأنشطة والمهام','بعد إغلاق المشروع'],1,2],
['لبدء بناء الخطة في GanttProject نحتاج إلى:',['ضبط خصائص المشروع وإدراج المهام','حذف المهام','إنهاء المشروع'],0,3],
['لماذا ننشئ مهام فرعية؟',['لتتبع التقدم وتنظيم المهمة الرئيسة','لإلغاء الجدول','لزيادة عدد أعضاء الفريق'],0,4],
['أي طريقتين تستخدمان لتحديد أولويات المهام؟',['ABC وأيزنهاور','جانت وHTML','النطاق والتكلفة'],0,5]
];
const plan2Stations=[
{title:'اختاري الأداة 🧰',text:plan2Topics[0][1],q:'فريق متوسط يعمل على مهام متسلسلة محددة بالأيام. أي أداة يناسبها سياق الدرس؟',o:['GanttProject','محرر صور','مشغل وسائط'],a:0},
{title:'اقرئي المخطط 📊',text:plan2Topics[1][1],q:'إذا أردت معرفة متى تبدأ المهمة ومدة تنفيذها ومتابعتها، فما الأداة الأنسب؟',o:['مخطط جانت','قائمة أسماء فقط','خطة قبول'],a:0},
{title:'ابني الزمن ⏱️',text:plan2Topics[2][1],q:'حددتِ نطاق مشروع معرض رقمي ومهامه. ما الخطوة المنطقية التالية؟',o:['تقدير مدد المهام وبناء الجدول','إغلاق المشروع','حذف الأنشطة'],a:0},
{title:'ابني الخطة 🗂️',text:plan2Topics[3][1],q:'أي تسلسل يبدأ به بناء خطة المشروع؟',o:['ضبط خصائص المشروع ثم إدراج المهام','تصدير الخطة ثم تحديد الاسم','إغلاق المشروع ثم إضافة المهام'],a:0},
{title:'فككي المهمة 🧩',text:plan2Topics[4][1],q:'مهمة «الإخراج» تتضمن الموسيقى والمشهد والأزياء. هذه العناصر تمثل:',o:['مهامًا فرعية','مشروعات مستقلة','موارد مالية'],a:0},
{title:'حددي الأولوية 🚦',text:plan2Topics[5][1],q:'مهمة مهمة وعاجلة في مصفوفة أيزنهاور ينبغي أن:',o:['تحظى بأولوية مرتفعة وتنفذ سريعًا','تؤجل دائمًا','تحذف'],a:0}
];
const plan2Post=[
['برنامج GanttProject مناسب في سياق الدرس خصوصًا لـ:',['مشروعات متوسطة ومهام متسلسلة بالأيام','تحرير الصور فقط','مشروعات بلا مهام'],0,0],
['وظيفة مخطط جانت هي:',['التخطيط والتنسيق وتتبع المهام','إلغاء الزمن','تحديد تكلفة الكهرباء'],0,1],
['عامل الزمن في مثلث المشروع يرتبط هنا بـ:',['تقدير مدة المهام وبناء الجدول','لون المخطط','اسم الملف'],0,2],
['من خطوات بناء الخطة:',['ضبط خصائص المشروع وإدراج المهام','حذف كل المهام','البدء بالعرض النهائي'],0,3],
['المهمة الفرعية تستخدم من أجل:',['تنظيم أجزاء المهمة وتتبع تقدمها','إلغاء المهمة الرئيسة','منع متابعة الإنجاز'],0,4],
['لجعل الموسيقى والمشهد والأزياء تحت «الإخراج» نستخدم مفهوم:',['المهام الفرعية','الموعد النهائي','التكلفة الثابتة'],0,4],
['من متطلبات تحديد الأولويات:',['تسلسل منطقي وتقدير مدة ووثائق واضحة','اختيار لون موحد','زيادة عدد المهام'],0,5],
['ABC وأيزنهاور هما طريقتان لـ:',['تحديد أولويات المهام','إنشاء الموارد','حذف المشروع'],0,5],
['في أيزنهاور، المهمة المهمة والعاجلة:',['تنفذ بأولوية عالية','تترك بلا موعد','تصنف غير مهمة'],0,5],
['في GanttProject يمكن تعيين أولوية المهمة من:',['خاصية Priority','اسم المشروع','لون الخلفية'],0,5]
];
let p2i=0,p2c=0,p2map=[],p2path='أكتشف',p2station=0,p2mastery=Array(6).fill(null),p2posti=0,p2postc=0,p2postans=[];
function projectAutomationIntro(){let u=state.course&&state.course.u1l2;S.innerHTML=hud()+"<section class='game-hero'><span class='pill'>الوحدة الأولى · الدرس الثاني</span><h2>بناء وأتمتة خطة المشروع 🗓️</h2><p>رحلة تطبيقية من اختيار أداة إدارة المشروع إلى بناء المهام وأتمتة أولوياتها.</p></section><div class='card q'><h3>محطات الدرس</h3>"+plan2Topics.map((x,i)=>"<div class='notice'><b>"+(i+1)+". "+x[0]+"</b></div>").join('')+"<button class='cta' onclick='"+(u&&u.diagnostic!=null?"resumePlan2()":"startPlan2Diagnostic()")+"'>"+(u&&u.diagnostic!=null?"واصلي رحلتك ←":"ابدئي التشخيص الذكي 🚀")+"</button></div>"}
function startPlan2Diagnostic(){p2i=0;p2c=0;p2map=[];renderPlan2Diagnostic()}
function renderPlan2Diagnostic(){let q=plan2Diag[p2i];S.innerHTML="<h2>تشخيص الدرس الثاني</h2><p class='tag'>6 محاور تحدد مسارك قبل التعلم.</p><div class='progressbar'><i style='width:"+(p2i/plan2Diag.length*100)+"%'></i></div><div class='card q'><span class='pill'>"+(p2i+1)+" من 6</span><h3>"+q[0]+"</h3>"+q[1].map((x,i)=>"<button class='option' onclick='answerPlan2Diag("+i+")'>"+x+"</button>").join('')+"</div>"}
function answerPlan2Diag(i){let q=plan2Diag[p2i],ok=i===q[2];p2map[q[3]]=ok;if(ok)p2c++;tone(ok?'good':'bad');p2i++;if(p2i<plan2Diag.length){renderPlan2Diagnostic();return}let p=Math.round(p2c/6*100);p2path=p<50?'أكتشف':p<80?'أطبق':'أبتكر';state.course=state.course||{};state.course.u1l2={diagnostic:p,path:p2path,diagMap:p2map,stage:'stations',stationIndex:0,stationMastery:Array(6).fill(null),status:'in_progress',updatedAt:Date.now()};save();syncStudent();let weak=plan2Topics.filter((_,i)=>!p2map[i]).map(x=>x[0]);S.innerHTML=hud()+"<div class='card q' style='text-align:center'><h2>تم بناء مسارك ✨</h2><div class='score' style='--p:"+p+"%'><strong>"+p+"%</strong></div><h3>المسار: "+p2path+"</h3><div class='notice'><b>محاور تحتاج تركيزًا:</b><br>"+(weak.length?weak.join(' · '):'أساس قوي؛ ستنتقلين إلى تطبيقات أعمق.')+"</div><button class='cta' onclick='startPlan2Stations()'>ابدئي المحطات ←</button></div>"}
function plan2Order(){let weak=[];p2map.forEach((ok,i)=>{if(!ok)weak.push(i)});return p2path==='أكتشف'?[0,1,2,3,4,5]:(weak.length?weak:[1,3,4,5])}
function savePlan2(stage){let u=state.course.u1l2||{};state.course.u1l2={...u,path:p2path||u.path,diagMap:p2map,stage:stage||'stations',stationIndex:p2station,stationMastery:p2mastery,status:'in_progress',updatedAt:Date.now()};save();syncStudent()}
function startPlan2Stations(){p2station=0;p2mastery=Array(6).fill(null);savePlan2('stations');renderPlan2Station()}
function renderPlan2Station(){let order=plan2Order();if(p2station>=order.length){plan2Mastery();return}savePlan2('stations');let idx=order[p2station],d=plan2Stations[idx];S.innerHTML=hud()+"<section class='game-hero'><span class='pill'>محطة "+(p2station+1)+" من "+order.length+"</span><h2>"+d.title+"</h2><p>"+(p2path==='أكتشف'?'افهمي الفكرة ثم طبقيها على موقف بسيط.':p2path==='أطبق'?'طبقي الفكرة على موقف مشروع واقعي.':'حللي الموقف واتخذي القرار الأنسب.')+"</p></section><div class='card q'><div class='notice'>"+d.text+"</div><h3>"+d.q+"</h3>"+d.o.map((x,i)=>"<button class='option' onclick='answerPlan2Station("+idx+","+i+")'>"+x+"</button>").join('')+"<div id='p2fb'></div></div>"}
function answerPlan2Station(idx,i){let d=plan2Stations[idx],ok=i===d.a,fb=document.querySelector('#p2fb');tone(ok?'good':'bad');if(!ok){fb.innerHTML="<div class='notice'>راجعي الفكرة وحاولي مرة أخرى 💡</div>";return}p2mastery[idx]=100;savePlan2('stations');fb.innerHTML="<div class='feedback'>✓ أتقنتِ تطبيق هذا المحور.</div><button class='cta' onclick='nextPlan2Station()'>المحطة التالية ←</button>"}
function nextPlan2Station(){p2station++;savePlan2('stations');renderPlan2Station()}
function resumePlan2(){let u=state.course&&state.course.u1l2;if(!u||u.diagnostic==null){projectAutomationIntro();return}p2path=u.path||'أكتشف';p2map=Array.isArray(u.diagMap)?u.diagMap.slice():Array(6).fill(false);p2mastery=Array.isArray(u.stationMastery)?u.stationMastery.slice():Array(6).fill(null);p2station=Number.isInteger(u.stationIndex)?u.stationIndex:0;if(u.post!=null){plan2ResultView(u);return}if(u.stage==='mastery'){plan2Mastery();return}renderPlan2Station()}
function plan2Mastery(){savePlan2('mastery');p2posti=0;p2postc=0;p2postans=[];renderPlan2Post()}
function renderPlan2Post(){let q=plan2Post[p2posti];S.innerHTML="<h2>🏆 قياس إتقان الدرس الثاني</h2><div class='progressbar'><i style='width:"+(p2posti/plan2Post.length*100)+"%'></i></div><div class='card q'><span class='pill'>"+(p2posti+1)+" من "+plan2Post.length+"</span><h3>"+q[0]+"</h3>"+q[1].map((x,i)=>"<button class='option' onclick='answerPlan2Post("+i+")'>"+x+"</button>").join('')+"</div>"}
function answerPlan2Post(i){let q=plan2Post[p2posti],ok=i===q[2];p2postans.push({topic:q[3],ok});if(ok)p2postc++;tone(ok?'good':'bad');p2posti++;if(p2posti<plan2Post.length){renderPlan2Post();return}let score=Math.round(p2postc/plan2Post.length*100),weakIds=[...new Set(p2postans.filter(x=>!x.ok).map(x=>x.topic))],weak=weakIds.map(i=>plan2Topics[i][0]),mastered=score>=80,u=state.course.u1l2||{};state.course.u1l2={...u,post:score,mastered,weakTopics:weak,stage:mastered?'complete':'remedial',status:mastered?'mastered':'remedial',updatedAt:Date.now()};save();syncStudent();plan2ResultView(state.course.u1l2)}
function plan2ResultView(u){let score=u.post||0,mastered=!!u.mastered,weak=u.weakTopics||[];S.innerHTML=hud()+"<div class='card q' style='text-align:center'><h2>"+(mastered?'🎉 أتقنتِ الدرس الثاني':'🌱 تحتاجين مراجعة موجهة')+"</h2><div class='score' style='--p:"+score+"%'><strong>"+score+"%</strong></div><div class='"+(mastered?'feedback':'notice')+"'>"+(mastered?'حققتِ معيار الإتقان 80٪ فأعلى.':'راجعي: '+weak.join(' · '))+"</div>"+(mastered?"<button class='cta' onclick='lessons()'>العودة إلى الوحدة الأولى ←</button>":"<button class='cta' onclick='plan2Remedial()'>ابدئي العلاج الموجّه ←</button>")+"</div>"}
function plan2Remedial(){let u=state.course.u1l2||{},weak=u.weakTopics||[];S.innerHTML="<h2>🌱 العلاج الموجّه</h2><p class='tag'>لن نعيد الدرس كاملًا؛ سنراجع فقط ما احتجتِ إليه.</p>"+weak.map(t=>{let x=plan2Topics.find(z=>z[0]===t);return "<div class='card'><h3>"+t+"</h3><p>"+(x?x[1]:'راجعي هذا المحور ثم أعيدي القياس.')+"</p></div>"}).join('')+"<button class='cta' onclick='plan2Mastery()'>إعادة قياس الإتقان ←</button>"}
