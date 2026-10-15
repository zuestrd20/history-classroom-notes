'use strict';
const eras=[
['商','約前1600—前1046','以黃河中下游為重要活動區域，王權、城市與祭祀組織並存。從「部落聯盟」理解起步，也要看見早期國家的複雜性。','politics'],
['西周','約前1046—前771','分封、宗法與禮樂相互支持，以政治義務和親族關係組織治理。諸侯的力量也可能逐步壯大。','politics'],
['東周','前770—前256','包括春秋、戰國階段；周王室衰弱，諸侯競爭。變法與諸子百家提供不同的富國強兵和治國方案。戰國時期通常延續計至秦統一的前221年。','politics'],
['秦','前221—前206','統一後設皇帝、推展郡縣與標準化措施。中央集權提高管理能力，也伴隨沉重徭役、兵役與統治危機。','politics'],
['漢','前202—220','前202年西漢建立；漢代政治中儒學地位提高，察舉與官學發展。張騫出使西域增進中亞聯繫。西漢與東漢之間曾有新朝等政權。','society'],
['魏晉南北朝','220—589','政權分立、人口移動與文化交融並行。九品中正、世族勢力、江南開發、北魏改革與佛教發展是重要線索。','regions'],
['隋','581—618','隋在581年建立，589年完成南北統一；科舉制度開始發展。建立政權與完成統一，並不是同一年。','society'],
['唐','618—907','科舉持續發展，多族群政治與陸海交流交織。新羅、遣唐使、吐蕃、印度與西亞都在交流網絡之中；政策與關係也會隨時期改變。','culture']];
const eraButtons=document.querySelector('#era-buttons');
function selectEra(i){[...eraButtons.children].forEach((b,j)=>b.setAttribute('aria-pressed',String(i===j)));const e=eras[i];document.querySelector('#era-detail').innerHTML=`<div><h3>${e[0]}</h3><span class="date">${e[1]}</span></div><div><p>${e[2]}</p><a href="#${e[3]}" style="font-size:12px;display:inline-block;margin-top:12px">閱讀相關章節 →</a></div>`;}
eras.forEach((e,i)=>{const b=document.createElement('button');b.textContent=e[0];b.type='button';b.setAttribute('aria-pressed','false');b.addEventListener('click',()=>selectEra(i));eraButtons.append(b)});selectEra(0);
const qs=[
['西周的封建、宗法與禮樂，有什麼關係？',['三者完全相同，只是名字不同','分別涉及治理、宗族與身分秩序，彼此支持','都是以考試選官的制度'],1,'封建安排地方治理，宗法維繫宗族關係，禮樂表達和規範身分秩序。功能不同，但相互支持。'],
['東周諸侯競爭，可能帶來什麼變化？',['各國停止改革','周王控制力必然愈來愈強','各國變法，思想家提出不同治國方案'],2,'競爭促使國家尋求富國強兵的方法，也為諸子百家的討論提供背景。'],
['商鞅變法主要追求什麼？',['以農耕、軍功與法令強化國家','恢復每個封國完全獨立','取消國家對人民的管理'],0,'商鞅變法服務於富國強兵，也強化國家對人民和地方的控制。'],
['秦的郡縣制與西周分封相比，重要差異是？',['郡縣官員一律世襲','中央透過任免官員加強地方控制','郡縣是完全獨立的國家'],1,'郡縣由中央任命的官員管理，與封國世襲及較大自主性不同；這是概括比較。'],
['解釋秦亡，哪個說法最完整？',['所有標準化措施都沒有作用','只要有法律，國家就一定滅亡','負擔、繼承與統治危機、反抗等因素交互作用'],2,'歷史結果通常有多重原因。統一制度可以有治理作用，但不能消除其他矛盾。'],
['漢代察舉的主要方式是？',['由官員察訪與推薦人才','全國所有人參加同一場科舉','依照父親職位自動當官'],0,'察舉以察訪和推薦為核心，不能與隋唐以後發展的科舉混為一談。'],
['九品中正制度後來常受到什麼影響？',['考卷印刷技術','家族門第與世族資源','人人完全相同的教育條件'],1,'九品中正本以人物品評供選官參考，後來門第影響加深，有利世族。'],
['隋唐出現科舉，是否代表仕途立即完全公平？',['是，所有社會差異立即消失','是，從此只有考試能當官','否，家庭、教育資源及其他任官途徑仍有影響'],2,'考試增加部分人的機會，但出身、財力、教育與性別仍限制參與，世族也未立即消失。'],
['長城沿線的農耕與草原社會，只有戰爭嗎？',['不是，也有貿易、和親、遷徙與合作','是，雙方從未交流','不是，但所有時期都沒有衝突'],0,'邊境既可能是衝突地帶，也是物品、人群和文化流動的空間。'],
['怎樣理解張騫與絲綢之路？',['張騫一人建造一條直達歐洲的路','他的出使促進聯繫，絲路是多條交流網絡','絲路只傳送絲，從不傳送思想'],1,'張騫出使增進漢朝對中亞的認識。絲路不是單一路線，也傳播宗教、技術與知識。'],
['北方人口南遷與江南開發的關係是？',['江南此前完全沒有人居住','南遷是唯一因素','移民與當地居民共同發展，另有環境及政治等因素'],2,'南遷提供勞動力與技術，但當地既有發展、自然條件和政權經營也重要。'],
['北魏孝文帝改革可以說明什麼？',['制度文化的採納與調整，不代表所有族群立即消失','所有北方族群從此完全一樣','文化只可能單方向傳播'],0,'「漢化」是概括改革的用語，不能遮蔽多向交流、地方差異及持續變化。'],
['佛教傳入中國與玄奘的關係，何者正確？',['玄奘是第一位將佛教傳入中國的人','漢代已有佛教傳入，玄奘後來赴印度求法與譯經','佛教起源於唐朝長安'],1,'佛教起源印度，漢代已逐步傳入；玄奘是唐代重要的求法與翻譯者。'],
['日本與新羅吸收唐文化，較準確的說法是？',['完全複製，沒有任何本土調整','只學習衣服，從不學制度','透過使節、僧人等交流，選擇並轉化外來文化'],2,'文化交流包含主動選擇與在地調整。遣唐使、大化革新與新羅交流都應放回各自背景。'],
['怎樣說明造紙術西傳最謹慎？',['經長期交流逐步傳播，怛羅斯的具體作用有爭議','751年之前中亞絕對沒有紙','一場戰役能完整解釋所有技術傳播'],0,'中亞在怛羅斯之戰前已知紙，戰俘傳藝故事見於較晚記載，不能當成唯一確定起點。'],
['唐代伊斯蘭教傳入應如何理解？',['只可能經一條陸路，與商人無關','隨商人、使者等往來逐步傳入，陸海路皆有作用','伊斯蘭教起源於中國'],1,'西亞等地商人和使者的往來促進宗教傳播，過程具有陸海多條路徑。']];
let answered=new Map();
function renderQuestions(){const target=document.querySelector('#questions');target.replaceChildren();qs.forEach((q,i)=>{const article=document.createElement('article');article.className='question';article.innerHTML=`<span class="q-number">QUESTION ${String(i+1).padStart(2,'0')}</span><h3 id="q-${i}">${q[0]}</h3><div class="options" role="group" aria-labelledby="q-${i}"></div><p class="feedback" id="feedback-${i}" aria-live="polite" hidden></p>`;q[1].forEach((o,j)=>{const b=document.createElement('button');b.type='button';b.textContent=`${'ABC'[j]}. ${o}`;b.addEventListener('click',()=>{if(answered.has(i))return;answered.set(i,j===q[2]);[...article.querySelectorAll('button')].forEach((el,k)=>{el.disabled=true;if(k===q[2])el.classList.add('correct');else if(k===j)el.classList.add('incorrect')});const f=article.querySelector('.feedback');f.hidden=false;f.innerHTML=`<strong>${j===q[2]?'答對了 ✓':'再想一想 · 正確答案：'+ 'ABC'[q[2]]}</strong>${q[3]}`;document.querySelector('#quiz-progress').textContent=`已完成 ${answered.size} / ${qs.length} 題`;if(answered.size===qs.length){const score=[...answered.values()].filter(Boolean).length;document.querySelector('#quiz-result').textContent=`完成！答對 ${score} / ${qs.length} 題。回看解釋，把錯誤變成新的理解。`}});article.querySelector('.options').append(b)});target.append(article)})}
document.querySelector('#reset-quiz').addEventListener('click',()=>{answered.clear();renderQuestions();document.querySelector('#quiz-progress').textContent='已完成 0 / 16 題';document.querySelector('#quiz-result').textContent='';document.querySelector('#questions button').focus()});renderQuestions();
const sources=[
['香港歷史博物館｜周代禮制與宗法文化','https://www.info.gov.hk/gia/general/200702/13/P200702130087.htm','第一章：分封、血緣與禮制的政治文化。'],
['中央研究院｜秦郡的組織與職掌','https://www1.ihp.sinica.edu.tw/en/Publications/LegalHistoryStudy/1154/Article/479','第一章：郡縣沿革與地方官僚職掌，避免「秦才發明郡縣」的誤解。'],
['教育部教育百科｜漢代太學','https://pedia.cloud.edu.tw/Entry/Detail/?title=%E6%BC%A2%E4%BB%A3%E5%A4%AA%E5%AD%B8','第二章：漢代官學、儒學教育與仕途。'],
['哥倫比亞大學｜The Confucian Classics & Civil Service Exams','https://afe.easia.columbia.edu/cosmos/irc/classics.htm','第二章：經典教育、科舉起源及長期發展。'],
['PNAS 學術研究｜唐代科舉與社會流動','https://pmc.ncbi.nlm.nih.gov/articles/PMC10823257/','第二章：以唐代墓誌等資料研究考試、家族背景與官僚仕途。'],
['UNESCO｜About the Silk Roads','https://www.unesco.org/en/silk-roads/about-silk-roads','第三章：絲路的網絡性，以及貨物、宗教與知識的交流。未採用此頁的玄奘返國年份。'],
['香港教育局｜中國歷史課程及評估指引','https://www.edb.gov.hk/attachment/tc/curriculum-development/kla/pshe/CHistCAGuide_updated_c_20180108_clean.pdf','第三章：江南開發、南北互動的課程脈絡。'],
['大都會藝術博物館｜Northern and Southern Dynasties','https://www.metmuseum.org/de/essays/period-of-the-northern-and-southern-dynasties-386-589','第三章：北魏改革、南北朝文化與佛教發展。'],
['Smithsonian｜The Art of Buddhism: China','https://archive.asia.si.edu/exhibitions/online/buddhism/china1.htm','第四章：漢代佛教傳入與六朝發展。'],
['大都會藝術博物館｜Internationalism in the Tang Dynasty','https://www.metmuseum.org/essays/internationalism-in-the-tang-dynasty-618-906','第四章：唐代跨區域交流。文章題名採906，本讀本唐亡年採通行的907。'],
['哥倫比亞大學｜The Reform Edict of Taika','https://afe.easia.columbia.edu/main_pop/ps/ps_japan-taika.htm','第四章：645年政變與其後改革，以及中國制度的影響。'],
['大都會藝術博物館｜Silla: Korea’s Golden Kingdom','https://www.metmuseum.org/exhibitions/listings/2013/koreas-golden-kingdom','第四章：新羅的跨文化接觸與在地轉化。'],
['故宮博物院｜文成公主','https://www.dpm.org.cn/lemmas/240045.html','第四章：文成公主身分與唐蕃婚姻交流。'],
['Smithsonian／John Guy｜Tang Trade and Cultural Exchange','https://asia.si.edu/wp-content/uploads/2023/06/shipwrecked-02-guy.pdf','第四章：唐代海上貿易與穆斯林商人，參閱印刷頁20–21。'],
['Encyclopaedia Iranica／Jonathan Bloom｜Paper in the Iranian World','https://www.iranicaonline.org/articles/paper-iran-prior-printing/','第四章：造紙術經中亞西傳，以及怛羅斯戰俘故事的證據限制。']];
const list=document.querySelector('#source-list');sources.forEach(([title,url,note])=>{const li=document.createElement('li');const a=document.createElement('a');a.href=url;a.textContent=title;a.target='_blank';a.rel='noopener noreferrer';const small=document.createElement('small');small.textContent=note;li.append(a,small);list.append(li)});
