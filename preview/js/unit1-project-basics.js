const projectTopics=[
['الأساسيات','المشروع سلسلة أنشطة أو مهام تُنجز خلال زمن وميزانية محددين للوصول إلى منتج أو خدمة. وإدارة المشروع تشمل البدء والتخطيط والتنفيذ والتحكم والإغلاق.'],
['مثلث إدارة المشروع','النطاق هو الأعمال المطلوبة، والزمن مدة إنجاز المهام وأولوياتها، والتكلفة تشمل الموارد والأدوات والمواد. توازن العناصر الثلاثة يدعم جودة المشروع.'],
['تخطيط المشروع','التخطيط يحدد كيف يكتمل المشروع ضمن زمن ومراحل وموارد محددة. ومن عناصره: النطاق، خطة تفصيلية، المخاطر، الأدوار والمسؤوليات، المعالم، والمراقبة والتحكم.'],
['دورة حياة الخطة','تمر دورة حياة خطة المشروع بخمس مراحل: البدء، التخطيط، التنفيذ، المراقبة والتحكم، ثم الإنهاء.'],
['مدير المشروع','مدير المشروع مسؤول عن إكمال المشروع بنجاح؛ يضع الخطة والجدول، يوظف الفريق، يعين المهام، يقود الفريق، ويقدم تقارير محدثة. ومن مهاراته القيادة واتخاذ القرار والتفاوض والعمل تحت الضغط.'],
['الخطط المساندة','يحتاج مدير المشروع إلى خطط مساندة؛ منها خطة القبول، وخطة التواصل، وخطة المخاطر، وخطة المشتريات.'],
['إدارة التكاليف','تشمل تقدير تكاليف المشروع والتخطيط لها والتحكم بها، وإنشاء الميزانية ومراقبة النفقات. ومن عناصر التقدير: الموارد البشرية، المواد والمعدات، المنشآت، الموردون، والتحديات والمخاطر.'],
['تعيين الموارد','هو تحديد وتنظيم الموارد اللازمة للمشروع مثل الأشخاص والمعدات والمواد والمرافق، ثم تخصيصها وإدارتها بما يحقق أهداف المشروع.']
];
const projectDiagnosticQs=[
['أي عبارة تصف المشروع؟',['عمل متكرر بلا نهاية','سلسلة مهام ضمن زمن وميزانية للوصول إلى منتج أو خدمة','مجموعة أفكار فقط'],1,0],
['ما عناصر مثلث إدارة المشروع؟',['النطاق والزمن والتكلفة','الفريق والمخاطر والجودة','البدء والتنفيذ والإغلاق'],0,1],
['تحديد المخاطر ووضع استراتيجيات للتعامل معها يعد من:',['عناصر تخطيط المشروع','إنهاء المشروع','التكاليف الثابتة'],0,2],
['ما الترتيب الصحيح لبداية دورة حياة خطة المشروع؟',['التنفيذ ثم الإنهاء','البدء ثم التخطيط','المراقبة ثم البدء'],1,3],
['أي عمل من واجبات مدير المشروع؟',['قيادة الفريق وتعيين المهام','تنفيذ كل المهام منفردًا','إلغاء الجدول الزمني'],0,4],
['أي خطة تبقي أصحاب المصلحة على اطلاع بمجريات المشروع؟',['خطة التواصل','خطة القبول','خطة المشتريات'],0,5],
['رواتب العمال والإيجارات أمثلة على:',['تكاليف ثابتة','تكاليف متغيرة','موارد غير مالية'],0,6],
['تحديد الأشخاص والمعدات والمواد اللازمة وتخصيصها يسمى:',['تعيين الموارد','تحديد المعالم','خطة القبول'],0,7]
];
let projectQi=0,projectCorrect=0,projectDiag=[],projectPath='أكتشف',projectStation=0,projectPi=0,projectPc=0,projectPostAnswers=[];
function projectBasicsIntro(){S.innerHTML=hud()+"<section class='game-hero'><span class='pill'>الوحدة الأولى · الدرس الأول</span><h2>أساسيات تخطيط المشروعات 📋</h2><p>رحلة تكيفية تغطي كنز الدرس كاملًا، وتحدد لكِ ما تحتاجين إليه بدل تقديم المحتوى نفسه للجميع.</p></section><div class='card q'><h3>🗺️ محطات الرحلة</h3>"+projectTopics.map((x,i)=>"<div class='notice'><b>"+(i+1)+". "+x[0]+"</b></div>").join('')+"<button class='cta' onclick='startProjectDiagnostic()'>ابدئي التشخيص الذكي 🚀</button></div>"}
function startProjectDiagnostic(){projectQi=0;projectCorrect=0;projectDiag=[];renderProjectDiagnostic()}
function renderProjectDiagnostic(){let q=projectDiagnosticQs[projectQi],opts=q[1].map((x,i)=>"<button class='option' onclick='answerProjectDiagnostic("+i+")'>"+x+"</button>").join('');S.innerHTML="<h2>التشخيص الذكي</h2><p class='tag'>نقيس 8 محاور من الدرس، وليس الحفظ فقط.</p><div class='progressbar'><i style='width:"+(projectQi/projectDiagnosticQs.length*100)+"%'></i></div><div class='card q'><span class='pill'>"+(projectQi+1)+" من "+projectDiagnosticQs.length+"</span><h3>"+q[0]+"</h3>"+opts+"</div>"}
function answerProjectDiagnostic(i){let q=projectDiagnosticQs[projectQi],ok=i===q[2];projectDiag[q[3]]=ok;if(ok)projectCorrect++;tone(ok?'good':'bad');projectQi++;if(projectQi<projectDiagnosticQs.length){renderProjectDiagnostic();return}let p=Math.round(projectCorrect/projectDiagnosticQs.length*100);projectPath=p<50?'أكتشف':p<80?'أطبق':'أبتكر';let needs=projectTopics.filter((x,i)=>!projectDiag[i]).map(x=>x[0]);S.innerHTML=hud()+"<div class='card q' style='text-align:center'><h2>تم بناء مسارك ✨</h2><div class='score' style='--p:"+p+"%'><strong>"+p+"%</strong></div><div class='path'><small>المسار الأنسب</small><h3>"+projectPath+"</h3></div><div class='notice'><b>محاور تحتاج تركيزًا:</b><br>"+(needs.length?needs.join(' · '):'أظهرتِ أساسًا قويًا في جميع المحاور، لذلك ستنتقلين إلى تطبيقات أعمق.')+"</div><button class='cta' onclick='startProjectStations()'>ابدئي رحلتك المخصصة ←</button></div>"}
function startProjectStations(){projectStation=0;renderProjectStation()}
function renderProjectStation(){let weak=[];projectDiag.forEach((ok,i)=>{if(!ok)weak.push(i)});let order=projectPath==='أكتشف'?[0,1,2,3,4,5,6,7]:projectPath==='أطبق'?(weak.length?weak:[2,3,5,6,7]):(weak.length?weak:[1,2,4,6,7]);if(projectStation>=order.length){projectChallenge();return}let idx=order[projectStation],t=projectTopics[idx],depth=projectPath==='أكتشف'?'اقرئي الفكرة ثم طبقيها في السؤال التالي.':projectPath==='أطبق'?'اربطي الفكرة بموقف مشروع حقيقي.':'حللي الفكرة كمديرة مشروع واتخذي قرارًا.';S.innerHTML=hud()+"<section class='game-hero'><span class='pill'>محطة "+(projectStation+1)+" من "+order.length+"</span><h2>"+t[0]+"</h2><p>"+depth+"</p></section><div class='card q'><div class='notice'>"+t[1]+"</div><button class='cta' onclick='projectStationCheck("+idx+")'>اختبر فهمي ⚡</button></div>"}
const projectStationBanks=[
[
['أي عبارة تفرق بين المشروع والعمل اليومي المتكرر؟',['المشروع له زمن وميزانية ونتيجة محددة','المشروع لا يحتاج هدفًا','المشروع يستمر بلا نهاية'],0],
['إدارة المشروع تعني:',['إنتاج الخدمة فقط','تنظيم مراحل البدء والتخطيط والتنفيذ والتحكم والإغلاق','كتابة الميزانية فقط'],1],
['فريق يريد إطلاق خدمة مدرسية خلال شهر وبميزانية محددة. هذا مثال على:',['مهمة روتينية','مشروع','خطة تواصل'],1]
],
[
['كل الأعمال والأنشطة اللازمة للوصول للمنتج تمثل:',['التكلفة','النطاق','الزمن'],1],
['تم تقليص مدة المشروع مع بقاء الأعمال نفسها. العنصر الذي تغير مباشرة هو:',['الزمن','النطاق','خطة القبول'],0],
['أي مجموعة تؤثر في جودة المشروع عند موازنتها؟',['المخاطر والموردون والفريق','البدء والتنفيذ والإغلاق','النطاق والزمن والتكلفة'],2]
],
[
['أي عنصر يحدد أهداف المشروع والنتائج وأصحاب المصلحة؟',['تحديد النطاق','تحديد المعالم','الإنهاء'],0],
['تحديد نقاط يقاس عندها تقدم المشروع يسمى:',['تحديد المخاطر','تحديد المعالم','تعيين الموارد'],1],
['ظهرت مشكلة أثناء التنفيذ؛ الإجراء التخطيطي الأنسب هو:',['تجاهلها حتى الإنهاء','تغيير الهدف مباشرة','مراقبة المشروع واتخاذ إجراء تصحيحي'],2]
],
[
['ما أول مرحلة في دورة حياة خطة المشروع؟',['التخطيط','البدء','التنفيذ'],1],
['أي ترتيب صحيح لثلاث مراحل متتابعة؟',['التخطيط ← التنفيذ ← المراقبة والتحكم','التنفيذ ← البدء ← الإنهاء','المراقبة ← التخطيط ← البدء'],0],
['بعد المراقبة والتحكم تأتي مرحلة:',['البدء','التخطيط','الإنهاء'],2]
],
[
['من واجبات مدير المشروع:',['تعيين المهام وقيادة الفريق','تنفيذ جميع الأعمال بنفسه','إخفاء التقارير عن الإدارة'],0],
['أي مهارة تساعد مدير المشروع عند الاتفاق مع مورد؟',['تجنب القرار','التفاوض الفعال','إلغاء الجدول'],1],
['تأخر الفريق وظهرت ضغوط زمنية؛ أي سلوك أنسب للمدير؟',['يتوقف عن المتابعة','يعمل تحت الضغط ويتخذ قرارًا مناسبًا','يلغي توزيع المسؤوليات'],1]
],
[
['الخطة التي تحدد معايير قبول المنتج النهائي هي:',['خطة المخاطر','خطة القبول','خطة التواصل'],1],
['لإبقاء أصحاب المصلحة على اطلاع نستخدم:',['خطة التواصل','خطة المشتريات','خطة القبول'],0],
['إذا احتجنا شراء خدمة من مورد خارجي نرجع إلى:',['خطة المخاطر','خطة القبول','خطة المشتريات'],2],
['خطة التعامل مع مشكلة محتملة قد تؤثر سلبًا على المشروع هي:',['خطة المخاطر','خطة التواصل','خطة القبول'],0]
],
[
['أي مثال يمثل تكلفة متغيرة؟',['إيجار ثابت','فاتورة الكهرباء والمواد المستخدمة في الإنتاج','راتب ثابت'],1],
['أي عنصر من عناصر تقدير تكلفة المشروع؟',['لون الشعار','الموارد البشرية','اسم الفريق'],1],
['الهدف من إدارة التكاليف هو:',['تقدير التكاليف والتخطيط لها والتحكم بها','زيادة الإنفاق','إلغاء الميزانية'],0],
['أي عامل قد يجعل تقدير التكلفة أقل دقة؟',['توفر بيانات دقيقة','الاستعجال وقلة الخبرة','المراقبة المستمرة'],1]
],
[
['تعيين الموارد يعني:',['تحديد وتنظيم وتخصيص الموارد اللازمة للمشروع','شراء المعدات فقط','تحديد اسم المشروع'],0],
['أي فائدة لتعيين الموارد؟',['فرط استغلال الأشخاص','وضع ذوي المهارات المناسبة في المهام المناسبة','إلغاء متابعة الموارد'],1],
['اكتشفت المديرة أن موظفة واحدة مكلفة بمهام كثيرة بينما أخرى بلا مهام. ما المفهوم الذي يساعد؟',['خطة القبول','تعيين الموارد','إغلاق المشروع'],1]
]
];
let projectStationQuestion=0,projectStationScore=0,projectStationOrder=[];
function projectStationCheck(idx){projectStationQuestion=0;projectStationScore=0;projectStationOrder=projectStationBanks[idx].map((_,i)=>i);renderProjectStationQuestion(idx)}
function renderProjectStationQuestion(idx){let bank=projectStationBanks[idx];if(projectStationQuestion>=projectStationOrder.length){finishProjectStation(idx);return}let q=bank[projectStationOrder[projectStationQuestion]],opts=q[1].map((x,i)=>"<button class='option' onclick='answerProjectStation("+idx+","+i+","+q[2]+")'>"+x+"</button>").join('');S.innerHTML="<h2>⚡ تحديات محطة "+projectTopics[idx][0]+"</h2><div class='progressbar'><i style='width:"+(projectStationQuestion/bank.length*100)+"%'></i></div><div class='card q'><span class='pill'>"+(projectStationQuestion+1)+" من "+bank.length+"</span><h3>"+q[0]+"</h3>"+opts+"<div id='projectFb'></div></div>"}
function answerProjectStation(idx,i,correct){let ok=i===correct;if(ok)projectStationScore++;tone(ok?'good':'bad');let fb=document.querySelector('#projectFb');fb.innerHTML="<div class='"+(ok?'feedback':'notice')+"'>"+(ok?'✓ إجابة صحيحة.':'ليست الإجابة الأدق؛ ستظهر هذه الفكرة ضمن احتياجك للمراجعة.')+"</div><button class='cta' onclick='nextProjectStationQuestion("+idx+")'>التالي ←</button>";Array.from(document.querySelectorAll('.option')).forEach(b=>b.disabled=true)}
function nextProjectStationQuestion(idx){projectStationQuestion++;renderProjectStationQuestion(idx)}
function finishProjectStation(idx){let total=projectStationBanks[idx].length,pct=Math.round(projectStationScore/total*100);if(pct<67)projectDiag[idx]=false;else projectDiag[idx]=true;projectStation++;S.innerHTML=hud()+"<div class='card q' style='text-align:center'><h2>"+(pct>=67?'✓ اجتزتِ المحطة':'🌱 رصدنا احتياجًا في المحطة')+"</h2><div class='score' style='--p:"+pct+"%'><strong>"+pct+"%</strong></div><p>"+(pct>=67?'أظهرتِ فهمًا جيدًا، انتقلي للمحطة التالية.':'لا بأس؛ سيُعاد هذا المحور لكِ في العلاج الموجّه بدل إعادة الدرس كاملًا.')+"</p><button class='cta' onclick='renderProjectStation()'>المحطة التالية ←</button></div>"}
function projectChallenge(){let prompt=projectPath==='أبتكر'?'أنتِ مديرة مشروع معرض تقني. ارتفعت تكلفة المواد وتأخر مورد، والموعد النهائي ثابت. ما القرار الأكثر تكاملًا؟':'تأخر مورد في مشروع مدرسي وقد يؤثر في الميزانية والموعد. ما التصرف الأفضل؟';let opts=['تحديث خطة المخاطر والمشتريات ومراجعة التكلفة والجدول','تجاهل التأخير حتى نهاية المشروع','إضافة أعمال جديدة إلى النطاق'];S.innerHTML=hud()+"<h2>🎮 تحدي مديرة المشروع</h2><div class='card game-card'><h3>"+prompt+"</h3>"+opts.map((x,i)=>"<button class='option' onclick='finishProjectChallenge("+i+")'>"+x+"</button>").join('')+"<div id='projectGameFb'></div></div>"}
function finishProjectChallenge(i){let fb=document.querySelector('#projectGameFb');if(i!==0){tone('bad');fb.innerHTML="<div class='notice'>فكري في المخاطر والمشتريات والتكلفة والزمن معًا، لا في عنصر واحد فقط.</div>";return}tone('good');fb.innerHTML="<div class='feedback'>🏅 قرار متكامل؛ ربطتِ أكثر من محور في الدرس.</div><button class='cta' onclick='projectMastery()'>بوابة الإتقان الشامل ←</button>"}
const projectPostQs=[
['أي عبارة تصف إدارة المشروع؟',['منتج نهائي فقط','عملية تشمل البدء والتخطيط والتنفيذ والتحكم والإغلاق','قائمة مشتريات'],1,0],
['النطاق في مثلث إدارة المشروع يعني:',['مدة المشروع فقط','ميزانية المشروع فقط','الأعمال والأنشطة اللازمة للوصول للمنتج أو الخدمة'],2,1],
['أي مما يلي من عناصر تخطيط المشروع؟',['إلغاء أصحاب المصلحة','تحديد المعالم التي يقاس عندها التقدم','ترك المخاطر دون تحليل'],1,2],
['رتبي بداية دورة الحياة:',['التنفيذ ثم البدء ثم الإنهاء','التخطيط ثم الإنهاء ثم البدء','البدء ثم التخطيط ثم التنفيذ'],2,3],
['أي مما يلي من مهارات مدير المشروع؟',['تجنب العمل تحت الضغط دائمًا','القيادة والتفاوض واتخاذ القرار','عدم تفويض المهام'],1,4],
['الخطة التي تساعد على شراء منتجات وخدمات من موردين خارجيين هي:',['خطة القبول','خطة التواصل','خطة المشتريات'],2,5],
['ما الهدف الأساسي من إدارة التكاليف؟',['زيادة النفقات','تقدير التكاليف والتخطيط لها والتحكم بها ضمن الميزانية','إلغاء الميزانية'],1,6],
['أي مثال يمثل تكلفة متغيرة؟',['الإيجار الثابت','راتب ثابت','الكهرباء والمواد المستخدمة في الإنتاج'],2,6],
['أي عنصر يدخل في تقدير تكلفة المشروع؟',['لون الشعار فقط','الموارد البشرية والمواد والمعدات والمنشآت والموردون والمخاطر','اسم المشروع فقط'],1,6],
['ما فائدة تعيين الموارد؟',['زيادة الاستغلال دون تخطيط','الاستغناء عن الفريق','تخصيص الأشخاص والموارد المناسبة للمهام المناسبة'],2,7],
['أي موقف يعبر عن المراقبة والتحكم؟',['اختيار اسم المشروع','تتبع سير المشروع ومعالجة مشكلة طارئة','إغلاق المشروع قبل تنفيذه'],1,2],
['أي خطة تحدد المعايير التي يجب أن يستوفيها المنتج النهائي؟',['خطة المخاطر','خطة التواصل','خطة القبول'],2,5]
];
function projectMastery(){projectPi=0;projectPc=0;projectPostAnswers=[];renderProjectPost()}
function renderProjectPost(){let q=projectPostQs[projectPi],opts=q[1].map((x,i)=>"<button class='option' onclick='answerProjectPost("+i+")'>"+x+"</button>").join('');S.innerHTML="<h2>🏆 قياس الإتقان الشامل</h2><p class='tag'>12 سؤالًا تغطي محاور الدرس الثمانية.</p><div class='progressbar'><i style='width:"+(projectPi/projectPostQs.length*100)+"%'></i></div><div class='card q'><span class='pill'>"+(projectPi+1)+" من "+projectPostQs.length+"</span><h3>"+q[0]+"</h3>"+opts+"</div>"}
function answerProjectPost(i){let q=projectPostQs[projectPi],ok=i===q[2];projectPostAnswers.push({topic:q[3],ok});if(ok)projectPc++;tone(ok?'good':'bad');projectPi++;if(projectPi<projectPostQs.length){renderProjectPost();return}projectPostResult()}
function projectPostResult(){let score=Math.round(projectPc/projectPostQs.length*100),mastered=score>=80,topicStats=projectTopics.map((t,idx)=>{let a=projectPostAnswers.filter(x=>x.topic===idx);return {name:t[0],ok:a.filter(x=>x.ok).length,total:a.length}}),weak=topicStats.filter(x=>x.total&&x.ok<x.total).map(x=>x.name);state.course=state.course||{};state.course.u1l1={diagnostic:Math.round(projectCorrect/projectDiagnosticQs.length*100),path:projectPath,post:score,mastered,weakTopics:weak,updatedAt:Date.now()};save();if(mastered)celebrate();S.innerHTML=hud()+"<div class='card q' style='text-align:center'><h2>"+(mastered?'🎉 أتقنتِ الدرس كاملًا':'🌱 مسارك العلاجي جاهز')+"</h2><div class='score' style='--p:"+score+"%'><strong>"+score+"%</strong></div><div class='"+(mastered?'feedback':'notice')+"'>"+(mastered?'حققتِ معيار الإتقان 80٪ فأعلى في القياس الشامل.':'المحاور التي تحتاج مراجعة: '+weak.join(' · '))+"</div>"+(mastered?"<button class='cta' onclick='lessons()'>العودة إلى الوحدة الأولى ←</button>":"<button class='cta' onclick='projectRemedial()'>ابدئي العلاج الموجّه ←</button>")+"</div>"}
function projectRemedial(){let weak=(state.course&&state.course.u1l1&&state.course.u1l1.weakTopics)||[];let cards=projectTopics.filter(x=>weak.includes(x[0])).map(x=>"<div class='card q'><h3>"+x[0]+"</h3><p>"+x[1]+"</p></div>").join('');S.innerHTML="<h2>🌿 العلاج الموجّه</h2><p class='tag'>لن تعيدي الدرس كله؛ فقط المحاور التي ظهر فيها احتياج.</p>"+cards+"<button class='cta' onclick='projectMastery()'>أعيدي قياس الإتقان ←</button>"}
