// data.js — Données du dashboard Média Mini-Pelle Rhinocéros
// ⚠️ SEUL fichier régénéré chaque lundi par la tâche automatique. Ne pas éditer à la main.
const EXTRACT_DATE='5 août 2026';
const LABELS_M=['Juil 25','Août 25','Sept 25','Oct 25','Nov 25','Déc 25','Janv 26','Févr 26','Mars 26','Avr 26','Mai 26','Juin 26','Juil 26'];
const LABELS_W=['4 mai','11 mai','18 mai','25 mai','1 juin','8 juin','15 juin','22 juin','29 juin','6 juil','13 juil','20 juil','27 juil','3 août'];
const FUNNEL_M={
  organic:{label:'Recherche naturelle (SEO)',leads:[66,60,49,59,37,42,60,56,52,48,44,39,16],mql:[59,56,45,56,35,35,58,53,46,47,41,36,14],opp:[26,11,19,18,17,19,34,26,21,15,15,7,2],cust:[53,2,0,0,14,6,6,1,0,0,0,0,0]},
  paidsearch:{label:'Référencement payant (Google Ads)',leads:[17,30,32,39,21,23,31,25,40,37,27,28,24],mql:[15,27,32,35,21,21,31,22,40,35,27,26,24],opp:[8,3,19,17,14,10,20,13,16,12,9,15,2],cust:[25,0,0,0,1,3,1,0,0,0,0,0,0]},
  paidsocial:{label:'Campagne sociale payante (Meta Ads)',leads:[2,0,0,2,5,10,12,14,12,1,9,21,8],mql:[3,0,0,4,5,10,13,13,12,1,9,21,8],opp:[3,0,0,4,1,7,12,10,10,0,3,9,4],cust:[7,0,0,0,3,2,1,0,0,0,0,0,0]},
  direct:{label:'Trafic direct',leads:[53,41,46,49,51,46,51,57,59,22,40,30,12],mql:[51,41,42,49,50,46,51,56,58,21,37,28,12],opp:[9,4,9,5,9,11,19,17,19,4,11,7,2],cust:[16,0,1,0,1,0,3,3,0,0,0,0,0]},
  offline:{label:'Sources hors ligne',leads:[259,204,243,414,307,291,288,311,298,256,227,232,117],mql:[22,7,27,11,21,20,6,3,7,6,3,8,7],opp:[46,20,43,53,60,43,71,81,67,43,23,40,17],cust:[178,1,1,3,14,6,16,7,1,0,0,0,1]},
  othercamp:{label:'Autres campagnes',leads:[22,9,15,31,23,13,6,6,3,3,8,25,12],mql:[7,2,6,5,3,2,1,0,0,0,0,0,0],opp:[8,2,1,6,4,6,2,1,1,0,0,0,0],cust:[6,0,0,0,2,0,1,0,0,0,0,0,0]},
  social:{label:'Réseau social organique',leads:[5,10,7,6,2,6,9,5,2,1,2,3,0],mql:[5,9,6,8,2,5,9,4,2,1,2,3,0],opp:[2,4,1,0,1,3,5,5,0,2,1,0,0],cust:[3,0,0,0,1,1,0,1,0,0,0,0,0]},
  referrals:{label:'Renvois',leads:[2,0,0,0,0,1,1,0,1,0,0,0,0],mql:[2,0,0,0,0,1,1,0,1,0,0,0,0],opp:[1,0,0,0,0,0,0,0,0,0,0,0,0],cust:[0,0,0,0,0,0,0,0,0,0,0,0,0]},
  aireferrals:{label:'Renvois IA',leads:[0,0,0,0,1,1,1,0,1,0,1,0,0],mql:[0,0,0,0,1,1,1,0,1,0,1,0,0],opp:[0,0,0,0,0,0,0,0,1,0,1,0,0],cust:[0,0,0,0,0,0,0,0,0,0,0,0,0]}
};
const FUNNEL_W={
  organic:{label:'Recherche naturelle (SEO)',leads:[13,13,8,7,6,12,12,6,7,7,6,8,9,6],mql:[13,11,8,6,6,11,11,6,6,6,5,8,9,5],opp:[4,3,5,3,1,0,4,2,0,1,1,3,4,1],cust:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  paidsearch:{label:'Référencement payant (Google Ads)',leads:[9,7,5,4,5,8,12,3,7,9,10,9,6,6],mql:[9,7,5,4,4,9,11,2,7,9,10,9,6,5],opp:[5,1,1,2,3,0,8,3,1,1,1,6,2,1],cust:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  paidsocial:{label:'Campagne sociale payante (Meta Ads)',leads:[4,1,2,1,6,4,7,4,2,3,5,5,4,3],mql:[4,1,2,1,6,4,7,4,2,3,5,5,4,3],opp:[1,0,2,0,4,1,3,1,0,0,4,3,0,1],cust:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  direct:{label:'Trafic direct',leads:[12,11,9,4,8,6,9,6,3,8,2,4,6,5],mql:[12,10,8,3,7,5,9,6,3,8,2,4,6,5],opp:[2,6,3,0,1,0,3,3,0,2,0,1,1,1],cust:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  offline:{label:'Sources hors ligne',leads:[67,46,53,50,59,54,41,66,47,34,50,53,42,25],mql:[1,1,1,0,2,0,2,3,2,4,2,0,0,2],opp:[9,7,1,6,10,9,12,8,6,2,10,10,3,4],cust:[0,0,0,0,0,0,0,0,0,1,0,0,0,0]},
  othercamp:{label:'Autres campagnes',leads:[1,0,3,4,6,2,5,11,2,6,5,4,4,4],mql:[0,0,0,0,0,0,0,0,0,0,0,0,0,0],opp:[0,0,0,0,0,0,0,0,0,0,0,1,0,0],cust:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  social:{label:'Réseau social organique',leads:[1,1,0,0,0,1,0,1,1,0,0,0,1,1],mql:[1,1,0,0,0,1,0,1,1,0,0,0,1,1],opp:[0,0,1,0,0,0,0,0,0,0,0,0,0,1],cust:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  referrals:{label:'Renvois',leads:[0,0,0,0,0,0,0,0,0,0,0,0,0,0],mql:[0,0,0,0,0,0,0,0,0,0,0,0,0,0],opp:[0,0,0,0,0,0,0,0,0,0,0,0,0,0],cust:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
  aireferrals:{label:'Renvois IA',leads:[0,0,0,0,0,0,0,0,0,0,0,1,0,0],mql:[0,0,0,0,0,0,0,0,0,0,0,1,0,0],opp:[1,0,0,0,0,0,0,0,0,0,0,0,0,0],cust:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
};
const GADS_M={
  cost:[1196.94,1525.63,1523.57,1555.97,1930.51,2890.49,2896.75,2740.02,3411.62,4448.58,3409.93,3086.38,1743.71],
  conv:[203.35,267.66,223.67,187.24,206.02,249.97,266.55,288.34,266.27,239.42,194.31,241.11,137.63],
  clicks:[6403,7078,10773,16349,12770,31376,28964,25270,38152,40978,21398,10933,6462],
  impr:[485568,502595,480181,528897,604095,1114987,1428049,1099315,1199603,1131967,592464,353836,119249],
  devis:[43.01,86.25,44.2,54.04,37.67,54.15,54.54,77.5,59.37,68.38,50.66,35.86,39.39],
  contact:[99.86,128.78,147.09,115.04,136.52,150.37,189.37,189.61,178.02,147.93,121.55,135.68,63.67],
  appels:[54.49,51.63,11.83,16.15,30.83,45.45,22.65,20.22,26.89,22.71,17.1,17.99,8.0],
  infos:[6,1,1,2,1,0,0,1,2,0,1,0,0],mql:[0,0,0,0,0,0,0,0,0,0,2.44,34.13,23.97],opp:[0,0,0,0,0,0,0,0,0,0.39,1.56,17.45,2.6],
  campaigns:[{name:'Performance Max - Flux Shopping - Acqui',cost:20694.99,conv:1553.95,value:37740.9},{name:'Search - Marque',cost:4046.63,conv:844.73,value:26496.45},{name:'Search - HM - Mini-Pelle',cost:2860.42,conv:151.38,value:16656.61},{name:'Performance Max - Flux Shopping - Rtg',cost:1830.02,conv:296.85,value:4466.27},{name:'Demand Gen - Flux Shopping - Rtg',cost:1259.94,conv:36.05,value:711.27},{name:'Search - HM - Accessoires',cost:1150.03,conv:65.37,value:5679.34},{name:'Search - Concurrents',cost:532.82,conv:23.19,value:391.89}]
};
const GADS_W={
  cost:[1235.32,581.09,509.65,459.85,726.63,892.27,836.44,569.85,568.13,710.15,636.08,761.29,609.66,193.87],
  conv:[77.14,38.37,24.61,36.35,51.02,72.65,74.94,41.02,49.02,64.78,54.41,41.96,54.13,19.14],
  clicks:[8672,3272,2433,1602,3281,3249,2695,1561,2092,2611,2471,3553,3360,934],
  impr:[289196,64459,35960,26018,79536,109890,106335,54599,41839,47481,41075,51964,53136,11011],
  contact:[47.69,28.11,18.5,20.04,30.39,37.47,41.58,24.24,23.2,32.08,27.91,18.49,24.02,11.46],
  devis:[21.51,5.0,5.0,6.74,9.26,16.5,5.5,4.61,16.55,15.76,13.2,11.05,11.98,2.0],
  appels:[6.5,4.09,1.03,4.97,5.98,5.0,6.0,1.0,1.0,4.2,3.2,1.0,5.09,0.5],
  infos:[0,1,0,0,0,0,0,0,0,0,0,0,0,0],
  mql:[0.53,0.07,0.08,2.43,3.54,9.93,14.48,6.08,7.66,10.97,7.82,6.98,8.79,4.99],
  opp:[0.91,0.09,0,2.17,1.85,3.75,7.37,5.1,0.62,1.77,2.28,4.44,4.25,0.19],
  campaigns:[{name:'Search - HM - Mini-Pelle',cost:3068.86,conv:180.77,value:21444.51},{name:'Performance Max - Flux Shopping - Acqui',cost:2580.42,conv:192.76,value:14061.52},{name:'Search - Marque',cost:1711.43,conv:248.41,value:16734.82},{name:'Search - HM - Accessoires',cost:1170.51,conv:59.82,value:7278.61},{name:'Demand Gen - Flux Shopping - Rtg',cost:759.06,conv:17.79,value:525.83}]
};
const FB1='https://external-bru2-1.xx.fbcdn.net/emg1/v/t13/';
const META_M={
  cost:[541.29,590.61,599.96,615.12,835.85,1385.92,1392.0,1254.38,1603.55,24.1,1602.1,1300.14,1140.71],
  impr:[194761,258975,226575,196179,243694,359683,439729,368461,438025,6099,463990,391785,425576],
  clicks:[8556,10252,8245,10130,12028,17001,17042,18838,18604,264,11993,10030,9886],
  leads:[26,59,69,78,86,80,71,84,79,10,59,51,35],
  campaigns:[{name:'Prospects - Demande de devis',cost:10191.3,leads:664,impr:3128664,clicks:120054},{name:'Retargeting - Demande de devis',cost:2694.43,leads:123,impr:884868,clicks:32815}],
  adsets:[{name:'Audience Large - H +25ans',camp:'Prospects',cost:9875.26,leads:637},{name:'Visiteurs sites 180j +25ans',camp:'Retargeting',cost:2694.5,leads:123},{name:'Intérêt Construction - H +25ans',camp:'Prospects',cost:193.5,leads:16},{name:'LAL 3% - H +25ans',camp:'Prospects',cost:123.01,leads:11}],
  ads:[{name:'Carousel - XN10 + XN12',cost:1577.85,leads:177,thumb:FB1+'13822334146127823199?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQJHjc2kKhZzTWpgvxOQu2LyjbfaID84K_3a-0hGMAYu4VeSglgE7Fz3Z9qgbBKBB1FhmXtKOn5o2eBLgQpMmDuLFMa7mEOT1eIBTdLNVa5y_VfsI40RgG6DFj98OEkJBsKrGlEgV95J_POaITwaNrID&fb_obo=1&stp=c0.5x0.5f_dst-emg0_p64x64_q75_tt6&_nc_sid=58080a'},{name:'Carousel - Promo - 6016',cost:1385.36,leads:87,thumb:FB1+'4973716524852213471?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQIh1crwoNOcgen4emkqOnLeqA7PLDQ_ZY5L74bfzN8WBthFF0sxZt0CNhli03hpdfZEYsaI0y21N857F84w_IWDyNtWFDwvf34UBzKmmIUbydmR4UXDnVNnGRMFLho61b9NCWkanvx9SNxMlVgPPyh7&fb_obo=1&stp=c0.5x0.5f_dst-emg0_p64x64_q75_tt6&_nc_sid=58080a'},{name:'Carousel - XN16',cost:1081.0,leads:72,thumb:FB1+'10124302011286624435?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQJ9B1-mMNsqYWlXfYuw4r7wvQl9bH9eRAbAxBvto9g-PF0AuDqRWCZYRU6P8k3mrz2kw2Oky8hc-xeDizvaNdTZuPyQn1n6W9bS87FTl8od2oyeISw7qVaOVchbt49XNq9Lk8rkTd1N5OIUp2b0yOzG&fb_obo=1&stp=c0.5x0.5f_dst-emg0_p64x64_q75_tt6&_nc_sid=58080a'},{name:'Carousel - XN20',cost:670.04,leads:41,thumb:FB1+'400989523142486843?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQLP4rVqpiXCtjL_clGEQfHWNP-zDWK_ZYY18_y1fKW63578SJHp3Lrnj7SRRusiMQr7al1U0yk9815NQnpAD1J6I5ndwkZ0_IrMGBR0-zlNo9siKCcNM-LnzsOhd63YMJ-zakeK975W3d3Im4qywsqm&fb_obo=1&stp=c0.5x0.5f_dst-emg0_p64x64_q75_tt6&_nc_sid=58080a'},{name:'Carousel - Catalogue Advantage+',cost:578.52,leads:48,thumb:FB1+'16475123203605379441?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQIdl37K0oD5MK4Zr5sX61LTjcs6jV_lfc7X2dp3MB22GGcTlQnOCp5x_OvUEr11ZSEiszHF3RDjG9feQC98QqJ1_UAywTMPG2NABFHfjk1-OD1IPJ51uY8HqPxdmsvuZKAcBHUHv58NZstqqD8fJpJh&fb_obo=1&stp=c0.5x0.5f_dst-emg0_p64x64_q75_tt6&_nc_sid=58080a'},{name:'Carousel - Promo 6010+6016+6020',cost:303.59,leads:17,thumb:''},{name:'Carousel - Promo - XN10 + XN12',cost:142.26,leads:9,thumb:''},{name:'Carousel - Promo - 6010',cost:133.23,leads:5,thumb:''}]
};
const SC='https://scontent-bru2-1.xx.fbcdn.net/v/t45.1600-4/';
const META_W={
  cost:[389.44,339.84,309.23,314.33,348.77,350.65,346.32,232.12,329.28,451.09,454.44,622.78,495.18,109.39],
  impr:[102792,102983,85671,92394,108919,107526,97381,70252,111160,174721,170723,178958,113509,29557],
  clicks:[2958,2445,2095,2200,3030,2793,2395,1578,2583,4056,4148,4939,3832,987],
  leads:[22,4,18,9,13,15,13,9,10,11,20,23,22,7],
  campaigns:[{name:'Prospects - Demande de devis',cost:4011.05,leads:166,impr:1160407,clicks:30988},{name:'Retargeting - Demande de devis',cost:1081.94,leads:30,impr:386187,clicks:9052}],
  adsets:[{name:'Audience Large - H +25ans',camp:'Prospects',cost:4011.05,leads:166},{name:'Visiteurs sites 180j +25ans',camp:'Retargeting',cost:1081.94,leads:30}],
  ads:[{name:'Fixe - Photo extérieur - Devant forêt',cost:1609.84,leads:66,thumb:''},{name:'Fixe - XN16 - Variantes IA',cost:1277.17,leads:46,thumb:''},{name:'Fixe - Photo extérieur - Parking',cost:834.23,leads:32,thumb:''},{name:'Fixe - 6010 - En situation avec humain',cost:281.7,leads:7,thumb:SC+'752610061_10237196172138805_2222789369546467292_n.jpg?_nc_cat=111&stp=c0.5x0.5f_dst-emg0_p64x64_q75_tt6&_nc_sid=58080a&oe=6A791A04'},{name:'Carousel - XN10 - Devant hangar',cost:154.06,leads:12,thumb:FB1+'7579110241672460998?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQJcYqTu6wh6zQ_2mnKkNIb7PQ7KnOKn4IolmPY8XxmLt1KL3fCGtIq5Xoy2HlxrY01HkEAexanGv-4q5VshUCR-X3VJbMjIY7XdTAqhQQPjEztAFwGI1_vw0UMmIX75bRjnPj1RVDBtS75BAF3yp92f&fb_obo=1&stp=c0.5x0.5f_dst-emg0_p64x64_q75_tt6&_nc_sid=58080a'},{name:'Carousel - XN16',cost:120.95,leads:8,thumb:FB1+'9694676876087065545?url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQJex1TGyUxSWjDxiIqgCu6Y6LReRYWRY-UfSLT86mcrVOuKt9cCLEyMcomtbzKrHsFQliXiKbBoXXIP_zUZYYkHo-JFVafO3oQR1g6RD8ZkPAvFctRtoyb4QgFh2jqJjUJiOgyNn6itkdX0CD9iWI1A&fb_obo=1&stp=c0.5x0.5f_dst-emg0_p64x64_q75_tt6&_nc_sid=58080a'},{name:'Fixe - 6010 (ancienne)',cost:63.76,leads:1,thumb:''},{name:'Fixe - 6016 - Devant entrepôt',cost:40.24,leads:1,thumb:''}]
};
