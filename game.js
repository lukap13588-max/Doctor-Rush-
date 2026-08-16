
const patients = [
  {
    name:"Sofia M.", age:27, job:"Grafikdesignerin", avatar:"👩🏻", urgency:"low",
    complaint:"Seit heute Morgen habe ich starkes Brennen beim Wasserlassen und muss ständig auf die Toilette.",
    vitals:{pulse:"88",temp:"37,4°",spo2:"99%",bp:"118/74"},
    exams:[
      {name:"Anamnese", result:"Kein Flankenschmerz, kein Erbrechen. Beschwerden seit etwa 10 Stunden.", cost:0, time:4},
      {name:"Urin-Stix", result:"Leukozyten positiv, Nitrit positiv.", cost:18, time:8},
      {name:"Nierenklopflager", result:"Kein Klopfschmerz über den Nieren.", cost:5, time:4}
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
      {name:"Lunge abhören", result:"Rechts basal feinblasige Rasselgeräusche.", cost:0, time:5},
      {name:"CRP-Test", result:"CRP deutlich erhöht.", cost:22, time:9, req:"lab"},
      {name:"Röntgen Thorax", result:"Rechtsbasales Infiltrat sichtbar.", cost:65, time:16, req:"imaging"}
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
      {name:"Blutzucker messen", result:"Blutzucker: 48 mg/dl.", cost:8, time:4},
      {name:"Neurologischer Kurzcheck", result:"Wach, ansprechbar, leicht verlangsamt.", cost:0, time:4},
      {name:"EKG", result:"Sinustachykardie, sonst unauffällig.", cost:30, time:8, req:"cardio"}
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
      {name:"Anamnese", result:"Ähnliche Attacken in der Vergangenheit, zusätzlich Übelkeit.", cost:0, time:4},
      {name:"Neurologischer Status", result:"Keine Lähmung, Sprache normal, Pupillen unauffällig.", cost:0, time:4},
      {name:"Blutdruckkontrolle", result:"Keine hypertensive Krise.", cost:4, time:3}
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
      {name:"12-Kanal-EKG", result:"ST-Hebungen in mehreren Ableitungen.", cost:20, time:6, req:"cardio"},
      {name:"Troponin", result:"Troponin erhöht.", cost:35, time:7, req:"lab"},
      {name:"Auskultation", result:"Herztöne rhythmisch, Lunge weitgehend frei.", cost:0, time:4}
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
      {name:"Bauch untersuchen", result:"Druckschmerz und Abwehrspannung rechts unten.", cost:0, time:6},
      {name:"Blutbild", result:"Leukozyten erhöht.", cost:20, time:8, req:"lab"},
      {name:"Ultraschall", result:"Verdickte, nicht komprimierbare Appendix.", cost:55, time:12, req:"imaging"}
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
      {name:"Inspektion", result:"Schwellung außen am Sprunggelenk, keine offene Wunde.", cost:0, time:4},
      {name:"Stabilitätstest", result:"Schmerz bei Inversion, leichte Instabilität.", cost:5, time:5},
      {name:"Röntgen", result:"Keine Fraktur sichtbar.", cost:45, time:13, req:"imaging"}
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
      {name:"Blutzucker messen", result:"Nüchternwert deutlich erhöht.", cost:8, time:4},
      {name:"HbA1c", result:"Langzeitblutzucker erhöht.", cost:25, time:7, req:"lab"},
      {name:"Urin-Stix", result:"Glukose im Urin nachweisbar.", cost:18, time:5}
    ],
    diagnoses:["Diabetes mellitus","Migräne","Pneumonie","Bänderdistorsion"],
    correctDiagnosis:"Diabetes mellitus",
    treatments:["Diabetologische Abklärung + Therapieplan","Gipsverband","Antibiotikum","Nur Hustensaft"],
    correctTreatment:"Diabetologische Abklärung + Therapieplan",
    reward:165, xp:80
  },
  {
    name:"Marco F.", age:28, job:"Fitness-Trainer", avatar:"👨🏾", urgency:"medium",
    complaint:"Ich habe pfeifende Atmung und komme schlechter Luft, besonders seit dem Joggen draußen.",
    vitals:{pulse:"104",temp:"36,7°",spo2:"95%",bp:"124/79"},
    exams:[
      {name:"Lunge abhören", result:"Exspiratorisches Giemen beidseits.", cost:0, time:4},
      {name:"Peak-Flow", result:"Deutlich vermindert.", cost:10, time:4},
      {name:"SpO₂-Kontrolle", result:"Sauerstoffsättigung leicht reduziert.", cost:5, time:2}
    ],
    diagnoses:["Asthma-Exazerbation","Pneumonie","Migräne","Harnwegsinfekt"],
    correctDiagnosis:"Asthma-Exazerbation",
    treatments:["Inhalation + bronchienerweiternde Therapie","Appendektomie","Glukose oral","Gipsverband"],
    correctTreatment:"Inhalation + bronchienerweiternde Therapie",
    reward:150, xp:72
  },
  {
    name:"Greta L.", age:63, job:"Pensionistin", avatar:"👵🏻", urgency:"medium",
    complaint:"Seit dem Frühstück habe ich krampfartige Schmerzen im rechten Oberbauch und mir ist übel.",
    vitals:{pulse:"96",temp:"37,8°",spo2:"98%",bp:"138/82"},
    exams:[
      {name:"Bauch untersuchen", result:"Druckschmerz im rechten Oberbauch.", cost:0, time:5},
      {name:"Labor", result:"Leicht erhöhte Entzündungswerte.", cost:20, time:8, req:"lab"},
      {name:"Ultraschall", result:"Steine in der Gallenblase sichtbar.", cost:55, time:12, req:"imaging"}
    ],
    diagnoses:["Gallenkolik","Appendizitis","Pneumonie","Migräne"],
    correctDiagnosis:"Gallenkolik",
    treatments:["Schmerztherapie + chirurgische Abklärung","Insulin geben","Nur Flüssigkeit","Notfallbeatmung"],
    correctTreatment:"Schmerztherapie + chirurgische Abklärung",
    reward:180, xp:85
  },
  {
    name:"Tim N.", age:36, job:"Verkäufer", avatar:"👨🏻‍🦱", urgency:"low",
    complaint:"Seit gestern Durchfall, Übelkeit und Bauchkrämpfe. Zwei Kollegen haben Ähnliches.",
    vitals:{pulse:"94",temp:"37,2°",spo2:"99%",bp:"117/71"},
    exams:[
      {name:"Anamnese", result:"Mögliche verdorbene Speise am Vorabend. Kein Blut im Stuhl.", cost:0, time:4},
      {name:"Bauchstatus", result:"Diffuse Druckempfindlichkeit, keine Abwehrspannung.", cost:0, time:4},
      {name:"Labor", result:"Keine schweren Auffälligkeiten.", cost:18, time:7, req:"lab"}
    ],
    diagnoses:["Gastroenteritis","Appendizitis","Akutes Koronarsyndrom","Diabetes mellitus"],
    correctDiagnosis:"Gastroenteritis",
    treatments:["Flüssigkeit, Elektrolyte, Schonung","Herzkatheter","Gipsverband","Antibiotikum sofort"],
    correctTreatment:"Flüssigkeit, Elektrolyte, Schonung",
    reward:115, xp:52
  },
  {
    name:"Selin A.", age:39, job:"Fotografin", avatar:"👩🏿", urgency:"medium",
    complaint:"Plötzlich starke Flankenschmerzen rechts, mir ist übel und ich finde keine bequeme Position.",
    vitals:{pulse:"110",temp:"36,9°",spo2:"99%",bp:"146/88"},
    exams:[
      {name:"Urin-Stix", result:"Mikrohämaturie nachweisbar.", cost:18, time:5},
      {name:"Nierenklopflager", result:"Klopfschmerz rechts positiv.", cost:5, time:4},
      {name:"CT Abdomen", result:"Konkrement im rechten Harnleiter.", cost:85, time:18, req:"imaging"}
    ],
    diagnoses:["Nierenstein","Harnwegsinfekt","Migräne","Bänderdistorsion"],
    correctDiagnosis:"Nierenstein",
    treatments:["Schmerztherapie + urologische Abklärung","Nur Hustensaft","Insulin i.v.","Appendektomie"],
    correctTreatment:"Schmerztherapie + urologische Abklärung",
    reward:195, xp:92
  }
];

const upgrades = [
  {id:"reception", icon:"🧑‍💼", name:"Empfang", desc:"+10 € Bonus pro abgeschlossenem Fall.", cost:700},
  {id:"training", icon:"📚", name:"Fortbildung", desc:"+15 % XP pro Fall.", cost:900},
  {id:"lab", icon:"🧪", name:"Schnelllabor", desc:"Laboruntersuchungen verfügbar und 20 % günstiger.", cost:850},
  {id:"imaging", icon:"🩻", name:"Bildgebung", desc:"Röntgen, Ultraschall und CT verfügbar.", cost:1300},
  {id:"cardio", icon:"❤️", name:"Kardiologie", desc:"EKG-Untersuchungen und Herzfälle werden leichter.", cost:1100}
];

const departments = [
  {id:"general", icon:"🩺", name:"Allgemeinmedizin", unlock:0, desc:"Basisversorgung für alle Standardfälle."},
  {id:"lab", icon:"🧪", name:"Labor", unlock:850, desc:"Mehr Diagnostik und günstige Labortests."},
  {id:"imaging", icon:"🩻", name:"Bildgebung", unlock:1300, desc:"Röntgen, Ultraschall und CT."},
  {id:"cardio", icon:"❤️", name:"Kardiologie", unlock:1100, desc:"Herzdiagnostik und Notfälle."}
];

const achievements = [
  {id:"first_shift", name:"Erste Schicht", desc:"Beende deine erste Schicht."},
  {id:"ten_patients", name:"Zehn Patienten", desc:"Behandle insgesamt 10 Patienten."},
  {id:"five_perfect", name:"Präzisionsarzt", desc:"Erreiche 5 perfekte Fälle."},
  {id:"rich", name:"Budgetmeister", desc:"Spare 2.000 € an."},
  {id:"level5", name:"Karrieresprung", desc:"Erreiche Klinik-Level 5."}
];

const missions = [
  {id:"correct3", text:"Stelle in einer Schicht mindestens 3 richtige Diagnosen.", rewardMoney:180, rewardXp:60,
   progress:r=>Math.min(r.correctDiagnoses,3)/3, done:r=>r.correctDiagnoses>=3, meta:r=>`${Math.min(r.correctDiagnoses,3)}/3 richtige Diagnosen`},
  {id:"perfect2", text:"Schaffe 2 perfekte Fälle in einer Schicht.", rewardMoney:220, rewardXp:80,
   progress:r=>Math.min(r.correct,2)/2, done:r=>r.correct>=2, meta:r=>`${Math.min(r.correct,2)}/2 perfekte Fälle`},
  {id:"saveTime", text:"Beende die Schicht mit mindestens 25 Minuten Restzeit.", rewardMoney:160, rewardXp:55,
   progress:r=>Math.min(r.timeLeft,25)/25, done:r=>r.timeLeft>=25, meta:r=>`${Math.max(0,Math.min(r.timeLeft,25))}/25 Minuten`},
  {id:"under120", text:"Gib in einer Schicht höchstens 120 € für Untersuchungen aus.", rewardMoney:170, rewardXp:65,
   progress:r=>Math.max(0,Math.min(1,(120-r.examSpend)/120)), done:r=>r.examSpend<=120, meta:r=>`${r.examSpend} € / 120 € ausgegeben`}
];

const defaultState = {
  money:500, rep:50, xp:0, day:1, upgrades:{}, patientsTreated:0, perfectCases:0, bestCombo:0, bestShift:0, achievements:{}
};

let state = JSON.parse(localStorage.getItem("doctorRushSaveV2") || "null") || structuredClone(defaultState);
let run = null;
let current = null;
let selectedDiagnosis = null;
let selectedTreatment = null;
let examined = new Set();
let soundOn = true;
let currentMission = getMissionForDay(state.day);

const $ = id => document.getElementById(id);

function clone(obj){ return JSON.parse(JSON.stringify(obj)); }
function save(){ localStorage.setItem("doctorRushSaveV2", JSON.stringify(state)); renderHome(); }
function levelFromXp(xp){ return 1 + Math.floor(xp/350); }
function hasDept(id){ return id === 'general' || !!state.upgrades[id]; }
function getMissionForDay(day){ return missions[(day-1) % missions.length]; }
function showScreen(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); $(id).classList.add('active'); window.scrollTo({top:0,behavior:'smooth'}); }
function toast(t){ $('toast').textContent=t; $('toast').classList.add('show'); setTimeout(()=>$('toast').classList.remove('show'),1700); }
function beep(freq=660, dur=.055){ if(!soundOn) return; try{ const ac=new (window.AudioContext||window.webkitAudioContext)(); const o=ac.createOscillator(), g=ac.createGain(); o.frequency.value=freq; g.gain.value=.035; o.connect(g); g.connect(ac.destination); o.start(); setTimeout(()=>{o.stop(); ac.close()}, dur*1000);}catch(e){} }
function shuffle(arr){ return [...arr].sort(()=>Math.random()-.5); }

function renderHome(){
  $('homeMoney').textContent = state.money + ' €';
  $('homeRep').textContent = state.rep;
  $('homeXp').textContent = state.xp + ' XP';
  $('homeLevel').textContent = levelFromXp(state.xp);
  renderMissionCard(); renderDepartments(); renderUpgrades(); renderAchievements();
}

function renderMissionCard(){
  currentMission = getMissionForDay(state.day);
  $('missionText').textContent = currentMission.text;
  let progress = 0, meta = 'Startet mit der nächsten Schicht';
  if(run){ progress = currentMission.progress(run); meta = currentMission.meta(run); }
  $('missionProgress').style.width = `${Math.round(progress*100)}%`;
  $('missionMeta').textContent = meta;
  $('missionReward').textContent = `+${currentMission.rewardMoney} € / +${currentMission.rewardXp} XP`;
}

function renderDepartments(){
  const list = $('departmentList'); list.innerHTML = '';
  departments.forEach(d=>{
    const on = hasDept(d.id);
    const el = document.createElement('div'); el.className = 'dept';
    el.innerHTML = `<div><div class='dept-name'>${d.icon} ${d.name}</div><small>${d.desc}</small></div><div class='status ${on?'on':'off'}'>${on?'AKTIV':'GESPERRT'}</div>`;
    list.appendChild(el);
  });
}

function renderUpgrades(){
  const list = $('upgradeList'); list.innerHTML = '';
  upgrades.forEach(u=>{
    const owned = !!state.upgrades[u.id];
    const el = document.createElement('div'); el.className = 'upgrade';
    el.innerHTML = `<div class='ico'>${u.icon}</div><div><h3>${u.name}</h3><p>${u.desc}</p></div><button ${owned||state.money<u.cost?'disabled':''}>${owned?'Gekauft':u.cost+' €'}</button>`;
    el.querySelector('button').onclick = ()=>{
      if(owned || state.money < u.cost) return;
      state.money -= u.cost; state.upgrades[u.id] = true; beep(820); save(); toast(u.name + ' freigeschaltet');
    };
    list.appendChild(el);
  });
}

function renderAchievements(){
  const list = $('achievementList'); list.innerHTML='';
  achievements.forEach(a=>{
    const on = !!state.achievements[a.id];
    const el = document.createElement('div'); el.className='ach';
    el.innerHTML = `<div><div class='ach-name'>${on?'🏆':'🔒'} ${a.name}</div><small>${a.desc}</small></div><div class='status ${on?'on':'off'}'>${on?'ERHALTEN':'OFFEN'}</div>`;
    list.appendChild(el);
  });
}

function startShift(){
  run = {
    index:0,
    patients: shuffle(patients).slice(0,6),
    earned:0,
    xp:0,
    rep:0,
    correct:0,
    correctDiagnoses:0,
    examSpend:0,
    timeLeft:100,
    combo:0,
    maxCombo:0,
    newAchievements:[]
  };
  loadPatient(); renderMissionCard(); showScreen('gameScreen');
}

function loadPatient(){
  if(run.timeLeft <= 0){ endShift('Die Zeit ist abgelaufen.'); return; }
  current = run.patients[run.index];
  selectedDiagnosis = null; selectedTreatment = null; examined = new Set();
  $('patientName').textContent=current.name;
  $('patientMeta').textContent=`${current.age} Jahre • ${current.job}`;
  $('avatar').textContent=current.avatar;
  $('complaint').textContent='„'+current.complaint+'“';
  $('vPulse').textContent=current.vitals.pulse; $('vTemp').textContent=current.vitals.temp; $('vSpo2').textContent=current.vitals.spo2; $('vBp').textContent=current.vitals.bp;
  const urg=$('urgency'); urg.className='urgency '+current.urgency; urg.textContent=current.urgency==='high'?'DRINGEND':current.urgency==='medium'?'ERHÖHT':'NORMAL';
  updateHud();
  $('shiftText').textContent=`Patient ${run.index+1}/${run.patients.length}`;
  $('shiftProgress').style.width=`${(run.index/run.patients.length)*100}%`;
  $('findings').innerHTML='';
  renderExamButtons();
  renderChoiceButtons('diagnosisButtons', current.diagnoses, 'diagnosis');
  renderChoiceButtons('treatmentButtons', current.treatments, 'treatment');
  updateSubmit();
}

function updateHud(){
  $('money').textContent=state.money; $('rep').textContent=state.rep; $('xp').textContent=state.xp; $('day').textContent=state.day; $('timeLeft').textContent=run.timeLeft;
  renderMissionCard();
}

function examAvailable(exam){ return !exam.req || hasDept(exam.req); }
function adjustedCost(cost){ return state.upgrades.lab && cost>0 ? Math.ceil(cost*0.8) : cost; }

function renderExamButtons(){
  const box = $('examButtons'); box.innerHTML='';
  current.exams.forEach((e,i)=>{
    const cost = adjustedCost(e.cost);
    const available = examAvailable(e);
    const btn=document.createElement('button');
    btn.className='choice'+(examined.has(i)?' done':'')+(!available?' locked':'');
    btn.innerHTML = `${e.name}<small>${cost?cost+' €':''}${cost&&e.time?' • ':''}${e.time||0} min${!available?` • braucht ${deptName(e.req)}`:''}</small>`;
    btn.disabled = examined.has(i) || !available;
    btn.onclick = ()=>{
      if(state.money < cost){ toast('Nicht genug Budget'); return; }
      if(run.timeLeft - e.time < 0){ toast('Zu wenig Zeit in der Schicht'); return; }
      state.money -= cost; run.examSpend += cost; run.timeLeft -= e.time; examined.add(i); beep(560);
      const f=document.createElement('div'); f.className='finding'; f.textContent=`${e.name}: ${e.result}`;
      $('findings').appendChild(f); renderExamButtons(); updateHud(); save();
    };
    box.appendChild(btn);
  });
}

function deptName(id){ const d = departments.find(x=>x.id===id); return d ? d.name : id; }

function renderChoiceButtons(id, items, type){
  const box = $(id); box.innerHTML='';
  items.forEach(item=>{
    const btn=document.createElement('button'); btn.className='choice'; btn.textContent=item;
    btn.onclick=()=>{
      if(type==='diagnosis') selectedDiagnosis=item; else selectedTreatment=item;
      [...box.children].forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected'); beep(700); updateSubmit();
    };
    box.appendChild(btn);
  });
}

function updateSubmit(){ $('submitBtn').disabled = !(selectedDiagnosis && selectedTreatment); }

function finishCase(){
  const diagOK = selectedDiagnosis === current.correctDiagnosis;
  const treatOK = selectedTreatment === current.correctTreatment;
  const perfect = diagOK && treatOK;
  let reward = perfect ? current.reward : diagOK ? Math.round(current.reward*0.45) : 0;
  if(state.upgrades.reception) reward += 10;
  let xpGain = perfect ? current.xp : diagOK ? Math.round(current.xp*0.45) : 10;
  if(state.upgrades.training) xpGain = Math.round(xpGain*1.15);
  let repGain = perfect ? 4 : diagOK ? 1 : -5;

  state.money += reward;
  state.xp += xpGain;
  state.rep = Math.max(0, Math.min(100, state.rep + repGain));
  state.patientsTreated += 1;
  run.earned += reward; run.xp += xpGain; run.rep += repGain;
  if(diagOK) run.correctDiagnoses += 1;
  if(perfect){ run.correct += 1; state.perfectCases += 1; run.combo += 1; run.maxCombo = Math.max(run.maxCombo, run.combo); }
  else run.combo = 0;
  state.bestCombo = Math.max(state.bestCombo, run.maxCombo);
  state.bestShift = Math.max(state.bestShift, run.earned);

  const freshlyUnlocked = unlockAchievements();
  run.newAchievements.push(...freshlyUnlocked);

  save();

  $('resultEmoji').textContent = perfect ? '✅' : diagOK ? '⚠️' : '❌';
  $('resultTitle').textContent = perfect ? 'Fall erfolgreich!' : diagOK ? 'Diagnose richtig' : 'Behandlung fehlgeschlagen';
  $('resultText').textContent = perfect ? `${current.name} wurde korrekt diagnostiziert und behandelt.` : `Richtige Diagnose: ${current.correctDiagnosis}. Richtige Behandlung: ${current.correctTreatment}.`;
  $('resultBreakdown').innerHTML = `
    <div class='result-line'><span>Diagnose</span><b>${diagOK?'✅ Richtig':'❌ Falsch'}</b></div>
    <div class='result-line'><span>Behandlung</span><b>${treatOK?'✅ Richtig':'❌ Falsch'}</b></div>
    <div class='result-line'><span>Belohnung</span><b>+${reward} €</b></div>
    <div class='result-line'><span>Erfahrung</span><b>+${xpGain} XP</b></div>
    <div class='result-line'><span>Ruf</span><b>${repGain>=0?'+':''}${repGain}</b></div>
    <div class='result-line'><span>Combo</span><b>x${run.combo}</b></div>
    <div class='result-line'><span>Restzeit</span><b>${run.timeLeft} min</b></div>`;
  $('nextBtn').textContent = run.index === run.patients.length-1 || run.timeLeft <= 0 ? 'Schicht auswerten' : 'Nächster Patient';
  beep(perfect?900:360,.12); showScreen('resultScreen');
}

function nextPatient(){
  run.index++;
  if(run.index >= run.patients.length || run.timeLeft <= 0){ endShift(); return; }
  loadPatient(); showScreen('gameScreen');
}

function endShift(reason=''){
  const missionDone = currentMission.done(run);
  let missionHtml = `<b>Tagesmission:</b> ${currentMission.text}<br><small>${currentMission.meta(run)}</small>`;
  if(missionDone){
    state.money += currentMission.rewardMoney; state.xp += currentMission.rewardXp; missionHtml += `<br><br>✅ Mission geschafft: +${currentMission.rewardMoney} € und +${currentMission.rewardXp} XP`;
    beep(980,.14);
  } else {
    missionHtml += `<br><br>❌ Mission nicht geschafft.`;
  }

  const moreAchievements = unlockAchievements();
  run.newAchievements.push(...moreAchievements);
  const uniqueAchievements = [...new Set(run.newAchievements)].filter(Boolean);

  state.day += 1;
  save();

  $('shiftSummary').textContent = reason || `Tag ${state.day-1} ist geschafft. Deine Entscheidungen wirken sich direkt auf Budget, Ruf und Karriere aus.`;
  $('sumMoney').textContent = run.earned + (missionDone ? currentMission.rewardMoney : 0) + ' €';
  $('sumXp').textContent = run.xp + (missionDone ? currentMission.rewardXp : 0) + ' XP';
  $('sumRep').textContent = (run.rep >= 0 ? '+' : '') + run.rep;
  $('sumCorrect').textContent = `${run.correct}/${run.patients.length}`;
  $('missionResult').innerHTML = missionHtml;
  $('newAchievements').innerHTML = uniqueAchievements.length ? `<b>Neue Erfolge:</b><br>${uniqueAchievements.map(id=>{
    const a=achievements.find(x=>x.id===id); return '🏆 ' + a.name;
  }).join('<br>')}` : '';
  showScreen('shiftScreen');
}

function unlockAchievements(){
  const got = [];
  const check = (id, cond)=>{ if(cond && !state.achievements[id]){ state.achievements[id]=true; got.push(id); toast('Erfolg freigeschaltet'); } };
  check('first_shift', state.day > 1 || (run && (run.index>0 || run.correct>=0)));
  check('ten_patients', state.patientsTreated >= 10);
  check('five_perfect', state.perfectCases >= 5);
  check('rich', state.money >= 2000);
  check('level5', levelFromXp(state.xp) >= 5);
  return got;
}

$('startBtn').onclick = startShift;
$('submitBtn').onclick = finishCase;
$('nextBtn').onclick = nextPatient;
$('quitBtn').onclick = ()=>endShift('Schicht wurde vorzeitig beendet.');
$('backHomeBtn').onclick = ()=>showScreen('homeScreen');
$('soundBtn').onclick = ()=>{ soundOn=!soundOn; $('soundBtn').textContent=soundOn?'🔊':'🔇'; };

renderHome();

if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
}
