
const patients = [
  {
    name:"Sofia M.", age:27, job:"Grafikdesignerin", avatar:"👩🏻", urgency:"low",
    complaint:"Seit heute Morgen habe ich starkes Brennen beim Wasserlassen und muss ständig auf die Toilette.",
    vitals:{pulse:"88",temp:"37,4°",spo2:"99%",bp:"118/74"},
    exams:[
      ["Anamnese","Kein Flankenschmerz, kein Erbrechen. Beschwerden seit etwa 10 Stunden.",0],
      ["Urin-Stix","Leukozyten positiv, Nitrit positiv.",18],
      ["Nierenklopflager","Kein Klopfschmerz über den Nieren.",5]
    ],
    diagnoses:["Harnwegsinfekt","Nierenstein","Gastroenteritis","Migräne"],
    correctDiagnosis:"Harnwegsinfekt",
    treatments:["Flüssigkeit + passende Antibiotikatherapie","Nur Bettruhe","Gipsverband","Inhalation"],
    correctTreatment:"Flüssigkeit + passende Antibiotikatherapie",
    reward:120, xp:55
  },
  {
    name:"Jonas K.", age:34, job:"Mechaniker", avatar:"👨🏼", urgency:"medium",
    complaint:"Ich habe seit zwei Tagen Fieber, Husten und beim tiefen Einatmen tut die Brust weh.",
    vitals:{pulse:"108",temp:"39,0°",spo2:"93%",bp:"126/78"},
    exams:[
      ["Lunge abhören","Rechts basal feinblasige Rasselgeräusche.",0],
      ["CRP-Test","CRP deutlich erhöht.",22],
      ["Röntgen Thorax","Rechtsbasales Infiltrat sichtbar.",65]
    ],
    diagnoses:["Pneumonie","Asthma","Panikattacke","Harnwegsinfekt"],
    correctDiagnosis:"Pneumonie",
    treatments:["Antibiotikum + symptomatische Therapie","Insulin","Nur Kühlung","Gelenk ruhigstellen"],
    correctTreatment:"Antibiotikum + symptomatische Therapie",
    reward:175, xp:75
  },
  {
    name:"Mia R.", age:19, job:"Studentin", avatar:"👩🏼", urgency:"medium",
    complaint:"Mir ist zittrig, ich schwitze und fühle mich plötzlich total schwach. Ich habe Diabetes.",
    vitals:{pulse:"116",temp:"36,6°",spo2:"99%",bp:"105/68"},
    exams:[
      ["Blutzucker messen","Blutzucker: 48 mg/dl.",8],
      ["Neurologischer Kurzcheck","Wach, ansprechbar, leicht verlangsamt.",0],
      ["EKG","Sinustachykardie, sonst unauffällig.",30]
    ],
    diagnoses:["Hypoglykämie","Migräne","Pneumonie","Appendizitis"],
    correctDiagnosis:"Hypoglykämie",
    treatments:["Schnell wirksame Glukose geben","Antibiotikum","Gipsverband","Diuretikum"],
    correctTreatment:"Schnell wirksame Glukose geben",
    reward:145, xp:70
  },
  {
    name:"Leon B.", age:41, job:"Koch", avatar:"👨🏻", urgency:"low",
    complaint:"Seit gestern habe ich starke, pochende Kopfschmerzen auf einer Seite und Licht ist unangenehm.",
    vitals:{pulse:"82",temp:"36,8°",spo2:"98%",bp:"131/82"},
    exams:[
      ["Anamnese","Ähnliche Attacken in der Vergangenheit, zusätzlich Übelkeit.",0],
      ["Neurologischer Status","Keine Lähmung, Sprache normal, Pupillen unauffällig.",0],
      ["Blutdruckkontrolle","Keine hypertensive Krise.",4]
    ],
    diagnoses:["Migräne","Schlaganfall","Meningitis","Pneumonie"],
    correctDiagnosis:"Migräne",
    treatments:["Reizabschirmung + geeignetes Schmerzmittel","Antibiotikum","Glukose i.v.","Gipsverband"],
    correctTreatment:"Reizabschirmung + geeignetes Schmerzmittel",
    reward:110, xp:50
  },
  {
    name:"Emil S.", age:52, job:"Busfahrer", avatar:"👨🏽", urgency:"high",
    complaint:"Plötzlich starker Druck auf der Brust, kalter Schweiß und der Schmerz zieht in den linken Arm.",
    vitals:{pulse:"112",temp:"36,7°",spo2:"94%",bp:"154/96"},
    exams:[
      ["12-Kanal-EKG","ST-Hebungen in mehreren Ableitungen.",20],
      ["Troponin","Troponin erhöht.",35],
      ["Auskultation","Herztöne rhythmisch, Lunge weitgehend frei.",0]
    ],
    diagnoses:["Akutes Koronarsyndrom","Panikattacke","Pneumonie","Migräne"],
    correctDiagnosis:"Akutes Koronarsyndrom",
    treatments:["Notfallversorgung + sofortige kardiologische Übergabe","Nach Hause schicken","Nur Schmerzgel","Orale Flüssigkeit"],
    correctTreatment:"Notfallversorgung + sofortige kardiologische Übergabe",
    reward:260, xp:120
  },
  {
    name:"Nina T.", age:31, job:"Lehrerin", avatar:"👩🏽", urgency:"medium",
    complaint:"Seit heute Nacht starke Schmerzen rechts unten im Bauch. Beim Gehen wird es schlimmer.",
    vitals:{pulse:"102",temp:"38,1°",spo2:"99%",bp:"121/76"},
    exams:[
      ["Bauch untersuchen","Druckschmerz und Abwehrspannung rechts unten.",0],
      ["Blutbild","Leukozyten erhöht.",20],
      ["Ultraschall","Verdickte, nicht komprimierbare Appendix.",55]
    ],
    diagnoses:["Appendizitis","Gastritis","Harnwegsinfekt","Migräne"],
    correctDiagnosis:"Appendizitis",
    treatments:["Chirurgische Vorstellung + nüchtern lassen","Nur Antazidum","Sport empfehlen","Inhalation"],
    correctTreatment:"Chirurgische Vorstellung + nüchtern lassen",
    reward:210, xp:95
  },
  {
    name:"Paul H.", age:24, job:"Fußballer", avatar:"🧔🏻", urgency:"low",
    complaint:"Ich bin beim Training umgeknickt. Der Knöchel ist dick und Auftreten tut weh.",
    vitals:{pulse:"90",temp:"36,5°",spo2:"99%",bp:"124/70"},
    exams:[
      ["Inspektion","Schwellung außen am Sprunggelenk, keine offene Wunde.",0],
      ["Stabilitätstest","Schmerz bei Inversion, leichte Instabilität.",5],
      ["Röntgen","Keine Fraktur sichtbar.",45]
    ],
    diagnoses:["Bänderdistorsion","Offene Fraktur","Thrombose","Appendizitis"],
    correctDiagnosis:"Bänderdistorsion",
    treatments:["Kühlen, Kompression, Hochlagern + Entlastung","Antibiotikum","Glukose geben","Notfall-Katheter"],
    correctTreatment:"Kühlen, Kompression, Hochlagern + Entlastung",
    reward:100, xp:45
  },
  {
    name:"Lara W.", age:46, job:"Bürokauffrau", avatar:"👩🏻‍🦰", urgency:"medium",
    complaint:"Seit Tagen bin ich sehr durstig, muss oft zur Toilette und fühle mich ungewöhnlich müde.",
    vitals:{pulse:"92",temp:"36,9°",spo2:"98%",bp:"135/84"},
    exams:[
      ["Blutzucker messen","Nüchternwert deutlich erhöht.",8],
      ["HbA1c","Langzeitblutzucker erhöht.",25],
      ["Urin-Stix","Glukose im Urin nachweisbar.",18]
    ],
    diagnoses:["Diabetes mellitus","Migräne","Pneumonie","Bänderdistorsion"],
    correctDiagnosis:"Diabetes mellitus",
    treatments:["Diabetologische Abklärung + Therapieplan","Gipsverband","Antibiotikum","Nur Hustensaft"],
    correctTreatment:"Diabetologische Abklärung + Therapieplan",
    reward:165, xp:80
  }
];

const upgrades = [
  {id:"lab", icon:"🧪", name:"Schnelllabor", desc:"Untersuchungen kosten 20 % weniger.", cost:500},
  {id:"reception", icon:"🧑‍💼", name:"Empfang", desc:"+10 € Bonus pro abgeschlossenem Fall.", cost:700},
  {id:"training", icon:"📚", name:"Fortbildung", desc:"+15 % XP pro Fall.", cost:900}
];

let state = JSON.parse(localStorage.getItem("doctorRushSave") || "null") || {
  money:500, rep:50, xp:0, day:1, level:1, upgrades:{}
};
let run = null;
let current = null;
let selectedDiagnosis = null;
let selectedTreatment = null;
let examined = new Set();
let soundOn = true;

const $ = id => document.getElementById(id);

function save(){ localStorage.setItem("doctorRushSave", JSON.stringify(state)); renderHome(); }
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}
function toast(t){
  $("toast").textContent=t; $("toast").classList.add("show");
  setTimeout(()=>$("toast").classList.remove("show"),1600);
}
function beep(freq=660, dur=.055){
  if(!soundOn) return;
  try{
    const ac=new (window.AudioContext||window.webkitAudioContext)();
    const o=ac.createOscillator(), g=ac.createGain();
    o.frequency.value=freq; g.gain.value=.035; o.connect(g); g.connect(ac.destination);
    o.start(); setTimeout(()=>{o.stop();ac.close()},dur*1000);
  }catch(e){}
}
function shuffle(arr){ return [...arr].sort(()=>Math.random()-.5); }

function renderHome(){
  $("homeMoney").textContent=state.money+" €";
  $("homeRep").textContent=state.rep;
  $("homeXp").textContent=state.xp+" XP";
  state.level = 1 + Math.floor(state.xp/350);
  $("homeLevel").textContent=state.level;
  const list=$("upgradeList"); list.innerHTML="";
  upgrades.forEach(u=>{
    const owned=!!state.upgrades[u.id];
    const el=document.createElement("div"); el.className="upgrade";
    el.innerHTML=`<div class="ico">${u.icon}</div>
      <div><h3>${u.name}</h3><p>${u.desc}</p></div>
      <button ${owned||state.money<u.cost?"disabled":""}>${owned?"Gekauft":u.cost+" €"}</button>`;
    el.querySelector("button").onclick=()=>{
      if(owned||state.money<u.cost)return;
      state.money-=u.cost; state.upgrades[u.id]=true; beep(820); save(); toast(u.name+" freigeschaltet");
    };
    list.appendChild(el);
  });
}

function startShift(){
  const count=5;
  run={index:0, patients:shuffle(patients).slice(0,count), earned:0, xp:0, rep:0, correct:0};
  loadPatient(); showScreen("gameScreen");
}

function loadPatient(){
  current=run.patients[run.index];
  selectedDiagnosis=null; selectedTreatment=null; examined=new Set();
  $("patientName").textContent=current.name;
  $("patientMeta").textContent=`${current.age} Jahre • ${current.job}`;
  $("avatar").textContent=current.avatar;
  $("complaint").textContent="„"+current.complaint+"“";
  $("vPulse").textContent=current.vitals.pulse;
  $("vTemp").textContent=current.vitals.temp;
  $("vSpo2").textContent=current.vitals.spo2;
  $("vBp").textContent=current.vitals.bp;
  const urg=$("urgency"); urg.className="urgency "+current.urgency;
  urg.textContent=current.urgency==="high"?"DRINGEND":current.urgency==="medium"?"ERHÖHT":"NORMAL";
  $("money").textContent=state.money; $("rep").textContent=state.rep; $("xp").textContent=state.xp; $("day").textContent=state.day;
  $("shiftText").textContent=`Patient ${run.index+1}/${run.patients.length}`;
  $("shiftProgress").style.width=`${(run.index/run.patients.length)*100}%`;
  $("findings").innerHTML="";
  renderExamButtons();
  renderChoiceButtons("diagnosisButtons", current.diagnoses, "diagnosis");
  renderChoiceButtons("treatmentButtons", current.treatments, "treatment");
  updateSubmit();
}

function renderExamButtons(){
  const box=$("examButtons"); box.innerHTML="";
  current.exams.forEach((e,i)=>{
    let cost=e[2];
    if(state.upgrades.lab && cost>0) cost=Math.ceil(cost*.8);
    const btn=document.createElement("button");
    btn.className="choice"+(examined.has(i)?" done":"");
    btn.innerHTML=`${e[0]}<small>${cost?cost+" €":"kostenlos"}</small>`;
    btn.disabled=examined.has(i);
    btn.onclick=()=>{
      if(state.money<cost){toast("Nicht genug Budget");return;}
      state.money-=cost; examined.add(i); beep(560);
      $("money").textContent=state.money;
      const f=document.createElement("div"); f.className="finding"; f.textContent=`${e[0]}: ${e[1]}`;
      $("findings").appendChild(f); renderExamButtons(); save();
    };
    box.appendChild(btn);
  });
}
function renderChoiceButtons(id,items,type){
  const box=$(id); box.innerHTML="";
  items.forEach(item=>{
    const btn=document.createElement("button"); btn.className="choice"; btn.textContent=item;
    btn.onclick=()=>{
      if(type==="diagnosis") selectedDiagnosis=item; else selectedTreatment=item;
      [...box.children].forEach(b=>b.classList.remove("selected"));
      btn.classList.add("selected"); beep(700); updateSubmit();
    };
    box.appendChild(btn);
  });
}
function updateSubmit(){ $("submitBtn").disabled=!(selectedDiagnosis&&selectedTreatment); }

function finishCase(){
  const diagOK=selectedDiagnosis===current.correctDiagnosis;
  const treatOK=selectedTreatment===current.correctTreatment;
  const perfect=diagOK&&treatOK;
  let reward=perfect?current.reward:diagOK?Math.round(current.reward*.45):0;
  if(state.upgrades.reception) reward+=10;
  let xpGain=perfect?current.xp:diagOK?Math.round(current.xp*.45):10;
  if(state.upgrades.training) xpGain=Math.round(xpGain*1.15);
  let repGain=perfect?4:diagOK?1:-5;

  state.money+=reward; state.xp+=xpGain; state.rep=Math.max(0,Math.min(100,state.rep+repGain));
  run.earned+=reward; run.xp+=xpGain; run.rep+=repGain; if(perfect) run.correct++;
  save();

  $("resultEmoji").textContent=perfect?"✅":diagOK?"⚠️":"❌";
  $("resultTitle").textContent=perfect?"Fall erfolgreich!":diagOK?"Diagnose richtig":"Behandlung fehlgeschlagen";
  $("resultText").textContent=perfect
    ?`${current.name} wurde korrekt diagnostiziert und behandelt.`
    :`Richtige Diagnose: ${current.correctDiagnosis}. Richtige Behandlung: ${current.correctTreatment}.`;
  $("resultBreakdown").innerHTML=`
    <div class="result-line"><span>Diagnose</span><b>${diagOK?"✅ Richtig":"❌ Falsch"}</b></div>
    <div class="result-line"><span>Behandlung</span><b>${treatOK?"✅ Richtig":"❌ Falsch"}</b></div>
    <div class="result-line"><span>Belohnung</span><b>+${reward} €</b></div>
    <div class="result-line"><span>Erfahrung</span><b>+${xpGain} XP</b></div>
    <div class="result-line"><span>Ruf</span><b>${repGain>=0?"+":""}${repGain}</b></div>`;
  $("nextBtn").textContent=run.index===run.patients.length-1?"Schicht auswerten":"Nächster Patient";
  beep(perfect?900:360,.12); showScreen("resultScreen");
}

function nextPatient(){
  run.index++;
  if(run.index>=run.patients.length){ endShift(); return; }
  loadPatient(); showScreen("gameScreen");
}
function endShift(){
  state.day++;
  save();
  $("shiftSummary").textContent=`Tag ${state.day-1} ist geschafft. Deine Entscheidungen wirken sich direkt auf Budget, Ruf und Karriere aus.`;
  $("sumMoney").textContent=run.earned+" €";
  $("sumXp").textContent=run.xp+" XP";
  $("sumRep").textContent=(run.rep>=0?"+":"")+run.rep;
  $("sumCorrect").textContent=`${run.correct}/${run.patients.length}`;
  showScreen("shiftScreen");
}
$("startBtn").onclick=startShift;
$("submitBtn").onclick=finishCase;
$("nextBtn").onclick=nextPatient;
$("quitBtn").onclick=endShift;
$("backHomeBtn").onclick=()=>showScreen("homeScreen");
$("soundBtn").onclick=()=>{soundOn=!soundOn;$("soundBtn").textContent=soundOn?"🔊":"🔇";};
renderHome();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
