import React from 'react';
import { ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';

const html = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN" "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Exported table: Text</title>
    <style type="text/css">
        table
        {
            border-style: solid;
            border-width: 1px;
            border-color: black;
            border-collapse: collapse;
        }
        
        table tr
        {
            background-color: white;
        }
        
        table tr.header
        {
            background-color: #DDDDDD;
        }
        
        table tr.title
        {
            background-color: #EEEEEE;
        }
        
        table tr td
        {
            padding: 0px 3px 0px 3px;
            border-style: solid;
            border-width: 1px;
            border-color: #666666;
        }
        
        table tr td.null
        {
            color: #999999;
            text-align: center;
            padding: 0px 3px 0px 3px;
            border-style: solid;
            border-width: 1px;
            border-color: #666666;
        }
        
        table tr td.separator
        {
            padding: 0px 3px 0px 3px;
            border-style: solid;
            border-width: 1px;
            border-color: #666666;
            background-color: #DDDDDD;
        }
        
        table tr td.rownum
        {
            padding: 0px 3px 0px 3px;
            border-style: solid;
            border-width: 1px;
            border-color: #666666;
            background-color: #DDDDDD;
            text-align: right;
        }
        
    </style>
    <body>
        <table>
            <tr class="title">
                <td colspan="3" align="center">Table: Text</td>
            </tr>
            <tr>
                <td align="left">
                    Պատարագ Հայաստանեայց Եկեղեցւոյ
                </td>
                <td align="left">
                    Badarak Hayasdanyayts Yegeghetsvo
                </td>
                <td align="left">
                    The Divine Liturgy of the Armenian Church
                </td>
            </tr>
            <tr>
                <td align="left">
                    ՊԱՏՐԱՍՏՈՒԹԻՒՆ
                </td>
                <td align="left">
                    BADRASDOOTIUN
                </td>
                <td align="left">
                    THE PREPARATION
                </td>
            </tr>
            <tr>
                <td align="left">
                    ԶԳԵՍՏԱՒՈՐՈՒՄ
                </td>
                <td align="left">
                    ZKESDAVOROOM
                </td>
                <td align="left">
                    VESTING
                </td>
            </tr>
            <tr>
                <td align="left">
                    Օրենք արկանելոյ սպաս Եկեղեցւոյ. Յորժամ կամիցի Քահանայն Պատարագ մատուցանել, պարտի այսպէս խորհրդաբար զգեստաւորիլ։ Մտցէ յաւանդատունն հանդերձ Սարկաւագօքն ուր զգեստքն են Պատարագի։ Եւ զգեցեալ պաշտօնէիցն ըստ իւրաքանչիւր աստիճանի։ Ասասցեն ապա.
                </td>
                <td align="left">
                    Orenk arganelo sbas Yegeghetsvo. Horjham gamitsi Kahanayn Badarak madootsanel, bardi aysbes khorhrtapar zkesdavoril: Mdtse havantadoonn hantertz Sargavakokn oor zkesdkn yen Badaraki: Yev zketsyal bashdoneitsn ŭsd yoorakanchyoor asdijani: Asastsen aba.
                </td>
                <td align="left">
                    The laws of serving the Church. Whenever the Priest wishes to offer a Liturgy, it is required to dress himself in such a symbolic way. Enter the vestry with the Deacons where the vestments are for the Liturgy, and having vested, each according to his official position and rank, they then say then.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սաղմոս ՃԼԱ.
                </td>
                <td align="left">
                    Saghmos JLA.
                </td>
                <td align="left">
                    Psalm 132
                </td>
            </tr>
            <tr>
                <td align="left">
                    Կցուրդ. Քահանայք քո զգեցցին զարդարութիւն եւ սուրբք քո ցնծալով ցնծասցեն։
                </td>
                <td align="left">
                    Gtsoort. Kahanayk ko zketstsin zartarootyoon yev soorpk ko tsndzalov tsndzastsen:
                </td>
                <td align="left">
                    Refrain. Let your priests clothe themselves with righteousness; and let your saints exult with joy.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Փոխ. Յիշեա Տէր զԴաւիթ եւ զամենայն հեզութիւն նորա։
                </td>
                <td align="left">
                    Pokh. Hishya Der zTavit yev zamenayn hezootyoon nora:
                </td>
                <td align="left">
                    Antiphon. Lord, remember David and all his meekness.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Որպէս երդուաւ տեառն եւ ուխտս եդ Աստուծոյ Յակովբայ։ 
                </td>
                <td align="left">
                    Vorbes yertvav dyaṙn yev ookhds yet Asdoodzo Hagovpa։ 
                </td>
                <td align="left">
                    How he swore to the Lord; and vowed to the God of Jacob.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Թէ ոչ մտից ի յարկս տան իմոյ, թէ ելից յանկողինս մահճաց իմոց։
                </td>
                <td align="left">
                    Te voch mdits i hargs dan imo, te yelits hangoghins mahjats imots:
                </td>
                <td align="left">
                    Surely I will not enter into the tabernacle of my house; nor go up into the couch of my bed.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Թէ տաց քուն աչաց իմոց կամ նինջ արտեւանաց իմոց կամ հանգիստ իրանաց իմոց, մինչեւ գտից զտեղի յարկի տեառն Աստուծոյ Յակովբայ։
                </td>
                <td align="left">
                    Te dats koon achats imots gam ninch ardevanats imots gam hankisd iranats imots, minchev kdits zdeghi hargi dyaṙn Asdoodzo Hagovpa։
                </td>
                <td align="left">
                    I will not give sleep to my eyes; or slumber to my eyelids, nor rest to my temples, until I find the place for the temple of the Lord God of Jacob.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ահա՛ լուաք զնմանէ յԵփրաթայ եւ գտաք զնա ի դաշտս մայրեաց։
                </td>
                <td align="left">
                    Aha՛ lvak znmane hEprata yev kdak zna i tashds mayryats:
                </td>
                <td align="left">
                    Behold, we heard of the same at Ephrathah; we found it in the fields of the woods.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Մտցուք ի յարկս նորա, երկիրպագցուք ի տեղւոջ ուր կացեալ են ոտք նորա։
                </td>
                <td align="left">
                    Mdtsook i hargs nora, yergirbaktsook i deghvoch oor gatsyal yen vodk nora:
                </td>
                <td align="left">
                    Let us go into his tabernacles; let us worship at the place where his feet stood.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Արի՛, Տէր, ի հանգիստ քո. դու եւ տապանակ կտակի սրբութեան քո։
                </td>
                <td align="left">
                    Ari՛, Der, i hankisd ko. too yev dabanag gdagi srpootyan ko:
                </td>
                <td align="left">
                    Arise, O Lord, to your resting place; you and the ark of your holiness.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Երիցունք քո զգեցցին զարդարութիւն եւ սուրբք քո ցնծալով ցնծասցեն։
                </td>
                <td align="left">
                    Yeritsoonk ko zketstsin zartarootyoon yev soorpk ko tsndzalov tsndzastsen:
                </td>
                <td align="left">
                    Let your priests clothe themselves with righteousness; and let your saints exult with joy.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Վասն Դաւթի սիրելւոյ քո մի՛ դարձուցաներ զերեսս քո յօծելոյ քումմէ։
                </td>
                <td align="left">
                    Vasn Tavti sirelvo ko mi՛ tartzootsaner zeress ko hodzelo koomme:
                </td>
                <td align="left">
                    For your beloved David’s sake, do not turn your face away from your anointed.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Երդուաւ տէր Դաւթի ճշմարտութեամբ եւ ոչ ստեաց նմա, ի պտղոյ որովայնի նորա նստուցանել յաթոռ նորա։
                </td>
                <td align="left">
                    Yertvav der Tavti jshmardootyamp yev voch sdyats nma, i bdgho vorovayni nora nsdootsanel hatoṙ nora:
                </td>
                <td align="left">
                    The Lord has sworn in truth to David, and has not lied to him; of the fruit of his loins he will set upon his throne.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Թէ պահեսցեն որդիք քո զօրէնս իմ եւ զվկայութիւնս իմ զոր ուսուցից նոցա։
                </td>
                <td align="left">
                    Te bahestsen vortik ko zorens im yev zvgayootyoons im zor oosootsits notsa:
                </td>
                <td align="left">
                    If your children will keep my covenant, and my testimony which I shall teach them,
                </td>
            </tr>
            <tr>
                <td align="left">
                    Որդիք նոցա նստցին յաւիտեանս յաւիտենից յաթոռ քո։
                </td>
                <td align="left">
                    Vortik notsa nsdtsin havidyans havidenits hatoṙ ko:
                </td>
                <td align="left">
                    Their children shall also sit upon your throne forevermore.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Հաճեցաւ Տէր ընդ Սիոն եւ ընտրեաց բնակիլ ի նմա. ասէ, ա՛յս է հանգիստ իմ յաւիտեանս յաւիտենից, ի սմա բնակեցայց զի հաճեցայ ընդ սա։
                </td>
                <td align="left">
                    Hajetsav Der ŭnt Sion yev ŭndryats pnagil i nma. ase, a՛ys e hankisd im havidyans havidenits, i sma pnagetsayts zi hajetsa ŭnt sa:
                </td>
                <td align="left">
                    For the Lord was pleased at Zion, and he chose to live on it, saying: This is my rest forever, here I will dwell, for I was pleased at it.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Զայրիս սորա օրհնելով օրհնեցից եւ զաղքատս սորա լցուցից հացիւ։
                </td>
                <td align="left">
                    Zayris sora orhnelov orhnetsits yev zaghkads sora ltsootsits hatsiv:
                </td>
                <td align="left">
                    I will abundantly bless her widows; and I will satisfy her poor with bread.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Երիցանց սորա զգեցուցից զփրկութիւն եւ սուրբք սորա ցնծալով ցնծասցեն։
                </td>
                <td align="left">
                    Yeritsants sora zketsootsits zprgootyoon yev soorpk sora tsndzalov tsndzastsen:
                </td>
                <td align="left">
                    I will also clothe her priests with salvation; and her saints shall exult with joy.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Անդ ծագեցից եղջիւր ի Դաւիթ. պատրաստ արարից զճրագ օծելոյ իմոյ։
                </td>
                <td align="left">
                    Ant dzaketsits yeghchyoor i Tavit. badrasd ararits zjrak odzelo imo։
                </td>
                <td align="left">
                    There I will make the horn of David to grow; I will prepare a lamp for my anointed.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Թշնամեաց սորա զգեցուցից զամօթ եւ ի վերայ նորա ծաղկեսցի սրբութիւն իմ։
                </td>
                <td align="left">
                    Tshnamyats sora zketsootsits zamot yev i vera nora dzaghgestsi srpootyoon im:
                </td>
                <td align="left">
                    His enemies will I clothe with shame; but upon himself my holiness shall flourish.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Փառք Հօր եւ Որդւոյ եւ Հոգւոյն Սրբոյ.
                </td>
                <td align="left">
                    Paṙk Hor yev Vortvo yev Hokvooyn Srpo.
                </td>
                <td align="left">
                    Glory to the Father and to the Son and to the Holy Spirit;
                </td>
            </tr>
            <tr>
                <td align="left">
                    Այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սարգաւագն
                </td>
                <td align="left">
                    Sarkavakn
                </td>
                <td align="left">
                    The Deacon
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ եւս խաղաղութեան զՏէր աղաչեսցուք։
                </td>
                <td align="left">
                    Yev yevs khaghaghootyan zDer aghachestsook:
                </td>
                <td align="left">
                    Again in peace let us beseech the Lord.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Խնդրեսցուք հաւատով միաբանութեամբ ի Տեառնէ, զի զողորմութեան զշնորհս իւր արասցէ ի վերայ մեր։ 
                </td>
                <td align="left">
                    Khntrestsook havadov miapanootyamp i Dyaṙne, zi zoghormootyan zshnorhs yoor arastse i vera mer: 
                </td>
                <td align="left">
                    Let us ask of the Lord in faith with one accord that he may bestow on us the grace of his mercy.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ամենակալ Տէր Աստուած մեր կեցուսցէ եւ ողորմեսցի։
                </td>
                <td align="left">
                    Amenagal Der Asdvadz mer getsoostse yev voghormestsi:
                </td>
                <td align="left">
                    May the almighty Lord our God save us and have mercy on us.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ ասասցեն երկոտասան
                </td>
                <td align="left">
                    Yev asastsen yergodasan
                </td>
                <td align="left">
                    And they say twelve times
                </td>
            </tr>
            <tr>
                <td align="left">
                    Տէր ողորմեա։
                </td>
                <td align="left">
                    Der voghormya:
                </td>
                <td align="left">
                    Lord, have mercy.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Որ զգեցեալ ես զլոյս որպէս հանդերձ Տէր մեր Յիսուս Քրիստոս, անճառելի խոնարհութեամբ յերկրի երեւեցար եւ ընդ մարդկան շրջեցար. որ եղեր քահանայապետ յաւիտենից ըստ կարգին Մելքիսեդեկի եւ զարդարեցեր զեկեղեցի քո սուրբ։
                </td>
                <td align="left">
                    Vor zketsyal yes zlooys vorbes hantertz Der mer Hisoos Krisdos, anjaṙeli khonarhootyamp hergri yerevetsar yev ŭnt martgan shrchetsar. vor yegher kahanayabed havidenits ŭsd garkin Melkisetegi yev zartaretser zegeghetsi ko soorp:
                </td>
                <td align="left">
                    O Jesus Christ our Lord, clothed with light as with a garment, you appeared upon earth in unspeakable humility and walked with men. You became eternal high priest after the order of Melchizedek and have adorned your holy church.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Տէր ամենակալ, որ պարգեւեցեր մեզ զնոյն զերկնային հանդերձ զգենուլ, արժանի արա եւ զիս ի ժամուս յայսմիկ, զանպիտան ծառայս քո, որ համարձակիմ եւ մերձենամ ի նոյն հոգեւոր պաշտօն փառաց քոց, որպէս զի զամենայն ամբարշտութիւնս մերկացայց, որ է հանդերձ պղծութեան, եւ զարդարեցայց լուսով քով։
                </td>
                <td align="left">
                    Der amenagal, vor barkevetser mez znooyn zergnayin hantertz zkenool, arjhani ara yev zis i jhamoos haysmig, zanbidan dzaṙays ko, vor hamartzagim yev mertzenam i nooyn hokevor bashdon paṙats kots, vorbes zi zamenayn amparshdootyoons mergatsayts, vor e hantertz bghdzootyan, yev zartaretsayts loosov kov:
                </td>
                <td align="left">
                    Lord almighty, having granted us to put on the same heavenly garment, make me, your useless servant, also worthy at this hour when I make bold to approach the same spiritual service of your glory, so that I may divest myself of all ungodliness, which is a vile garment, and that I may be adorned with your light. Cast away my wickedness from me and shake me out of my transgressions that I may be made worthy of the light prepared by you in the world to come.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ընկեա յինէն զչարիս իմ եւ թօթափեա զյանցանս իմ, որպէս զի արժանի եղէց հանդերձեալ լուսոյդ առ ի քէն։ Շնորհեա ինձ քահանայական փառօք մտանել ի պաշտօն սրբութեանց քոց ընդ այնոսիկ՝ որք անմեղութեամբ պահեցին զպատուիրանս քո. զի եւ ես պատրաստ գտայց երկնաւոր առագաստիդ ընդ իմաստուն կուսանսն փառաւորել զքեզ՝ Քրիստոս, որ բարձեր զմեղս ամենեցուն։ Զի դու ես սրբութիւն անձանց մերոց եւ քեզ բարերարիդ Աստուծոյ վայելէ փառք, իշխանութիւն եւ պատիւ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն
                </td>
                <td align="left">
                    Ŭngya hinen zcharis im yev totapya zhantsans im, vorbes zi arjhani yeghets hantertzyal loosooyt aṙ i ken: Shnorhya intz kahanayagan paṙok mdanel i bashdon srpootyants kots ŭnt aynosig՝ vork anmeghootyamp bahetsin zbadvirans ko. zi yev yes badrasd kdayts yergnavor aṙakasdit ŭnt imasdoon goosansn paṙavorel zkez՝ Krisdos, vor partzer zmeghs amenetsoon: Zi too yes srpootyoon antzants merots yev kez parerarit Asdoodzo vayele paṙk, ishkhanootyoon yev badiv, ayjhm yev mishd yev havidyans havidenits: Amen
                </td>
                <td align="left">
                    Grant me to enter with priestly glory upon the ministry of your holy things together with those who have kept your commandments without sinning, so that I also may be found prepared for the heavenly nuptial chamber with the wise virgins to glorify you, Christ, who bore the sins of all. For you are the holiness of our souls and to you, beneficent God, is befitting glory, dominion and honor, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սարկաւագն
                </td>
                <td align="left">
                    Sargavakn
                </td>
                <td align="left">
                    The Deacon
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ եւս խաղաղութեան զՏէր աղաչեսցուք։ 
                </td>
                <td align="left">
                    Yev yevs khaghaghootyan zDer aghachestsook: 
                </td>
                <td align="left">
                    Again in peace let us beseech the Lord:
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ընկալ, կեցո եւ ողորմեա։
                </td>
                <td align="left">
                    Ŭngal, getso yev voghormya:
                </td>
                <td align="left">
                    Receive us, save us, and have mercy on us.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Օրհնութիւն եւ փառք Հօր եւ Որդւոյ եւ Հոգւոյն Սրբոյ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Orhnootyoon yev paṙk Hor yev Vortvo yev Hokvooyn Srpo, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Blessing and glory to the Father and to the Son and to the Holy Spirit, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ յետ օրհնութեան՝ դիցէ յառաջ զխոյրն ի գլուխն եւ ասասցէ.
                </td>
                <td align="left">
                    Yev hed orhnootyan՝ titse haṙach zkhooyrn i klookhn yev asastse.
                </td>
                <td align="left">
                    And after the blessing, he first puts the crown [saghavard] on his head, saying:
                </td>
            </tr>
            <tr>
                <td align="left">
                    Դիր, Տէր, սաղաւարտ փրկութեան ի գլուխ իմ պատերազմել ընդ զօրութիւնս թշնամւոյն. շնորհօք Տեառն մերոյ Յիսուսի Քրիստոսի, որում վայելէ փառք իշխանութիւն եւ պատիւ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Tir, Der, saghavard prgootyan i klookh im baderazmel ŭnt zorootyoons tshnamvooyn. shnorhok Dyaṙn mero Hisoosi Krisdosi, voroom vayele paṙk ishkhanootyoon yev badiv, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Lord, put the helmet of salvation upon my head to fight against the powers of the enemy, by the grace of our Lord Jesus Christ to whom is befitting glory, dominion and honor, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Շապկին
                </td>
                <td align="left">
                    Shabgin
                </td>
                <td align="left">
                    For the alb [shabeeg]
                </td>
            </tr>
            <tr>
                <td align="left">
                    Զգեցո ինձ, Տէր, հանդերձ փրկութեան եւ պատմուճան ուրախութեան, եւ շուրջ պատեա զզգեստովս փրկութեան. շնորհօք Տեառն մերոյ Յիսուսի Քրիստոսի որում վայելէ փառք, իշխանութիւն եւ պատիւ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Zketso intz, Der, hantertz prgootyan yev badmoojan oorakhootyan, yev shoorch badya zzkesdovs prgootyan. shnorhok Dyaṙn mero Hisoosi Krisdosi voroom vayele paṙk, ishkhanootyoon yev badiv, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Clothe me, Lord, with the garment of salvation and with a robe of gladness, and gird me with this vestment of salvation, by the grace of our Lord Jesus Christ to whom is befitting glory, dominion and honor, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Փորուրարին
                </td>
                <td align="left">
                    Poroorarin
                </td>
                <td align="left">
                    For the stole [poroorar]
                </td>
            </tr>
            <tr>
                <td align="left">
                    Զգեցո, Տէր, պարանոցի իմոյ զարդարութիւն եւ սրբեա զսիրտ իմ յամենայն աղտեղութենէ մեղաց. շնորհօք Տեառն մերոյ Յիսուսի Քրիստոսի որում վայելէ փառք, իշխանութիւն եւ պատիւ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։ 
                </td>
                <td align="left">
                    Zketso, Der, baranotsi imo zartarootyoon yev srpya zsird im hamenayn aghdeghootene meghats. shnorhok Dyaṙn mero Hisoosi Krisdosi voroom vayele paṙk, ishkhanootyoon yev badiv, ayjhm yev mishd yev havidyans havidenits: Amen: 
                </td>
                <td align="left">
                    Clothe my neck, O Lord, with righteousness and cleanse my heart from all filthiness of sin, by the grace of our Lord Jesus Christ, to whom is befitting glory, dominion and honor, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Գօտւոյն
                </td>
                <td align="left">
                    Kodvooyn
                </td>
                <td align="left">
                    For the belt [kodee]
                </td>
            </tr>
            <tr>
                <td align="left">
                    Շուրջ պատեսցէ կամար հաւատոյ զմէջս սրտի իմոյ եւ մտացս եւ շիջուսցէ ի սոցանէ զխորհուրդս աղտեղիս եւ զօրութիւն շնորհաց քոց յամենայն ժամ բնակեսցի ի սոսա. շնորհօք Տեառն մերոյ Յիսուսի Քրիստոսի որում վայելէ փառք, իշխանութիւն եւ պատիւ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Shoorch badestse gamar havado zmechs srdi imo yev mdatss yev shichoostse i sotsane zkhorhoorts aghdeghis yev zorootyoon shnorhats kots hamenayn jham pnagestsi i sosa. shnorhok Dyaṙn mero Hisoosi Krisdosi voroom vayele paṙk, ishkhanootyoon yev badiv, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    May the girdle of faith encircle me round about my heart and my mind and quench vile thoughts out of them; and may the power of your grace abide in them at all times, by the grace of our Lord Jesus Christ, to whom is befitting glory, dominion and honor, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Բազպանին
                </td>
                <td align="left">
                    Pazbanin
                </td>
                <td align="left">
                    For the maniple [pazban] on the right and left hands
                </td>
            </tr>
            <tr>
                <td align="left">
                    Տուր, Տէր, զօրութիւն աջոյ (կամ ձախոյ) ձեռին իմոյ եւ լուա զամենայն աղտեղութիւնս իմ, որպէս զի կարող լինիցիմ սպասաւորել քեզ անախտութեամբ հոգւոյ եւ մարմնոյ. շնորհօք Տեառն մերոյ Յիսուսի Քրիստոսի որում վայելէ փառք, իշխանութիւն եւ պատիւ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Door, Der, zorootyoon acho (gam tzakho) tzeṙin imo yev lva zamenayn aghdeghootyoons im, vorbes zi garogh linitsim sbasavorel kez anakhdootyamp hokvo yev marmno. shnorhok Dyaṙn mero Hisoosi Krisdosi voroom vayele paṙk, ishkhanootyoon yev badiv, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Give strength, Lord, to my right (or left) hand and wash all my filthiness, that I may be able to serve you in health of soul and body, by the grace of our Lord, Jesus Christ, to whom is befitting glory, dominion and honor, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Վակասին
                </td>
                <td align="left">
                    Vagasin
                </td>
                <td align="left">
                    For the amice [vagas]
                </td>
            </tr>
            <tr>
                <td align="left">
                    Զգեցո, Տէր, պարանոցի իմոյ զարդարութիւն, եւ սրբեա զսիրտ իմ յամենայն աղտեղութենէ մեղաց. շնորհօք Տեառն մերոյ Յիսուսի Քրիստոսի որում վայելէ փառք, իշխանութիւն եւ պատիւ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Zketso, Der, baranotsi imo zartarootyoon, yev srpya zsird im hamenayn aghdeghootene meghats. shnorhok Dyaṙn mero Hisoosi Krisdosi voroom vayele paṙk, ishkhanootyoon yev badiv, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Clothe my neck, Lord, with righteousness and cleanse my heart from all filthiness of sin, by the grace of our Lord, Jesus Christ, to whom is befitting glory, dominion and honor, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Նափորտին՝ որ է Շուրջառ
                </td>
                <td align="left">
                    Napordin՝ vor e Shoorchaṙ
                </td>
                <td align="left">
                    For the cope [shoorchar]
                </td>
            </tr>
            <tr>
                <td align="left">
                    Տէր, ողորմութեամբ քով զգեցո ինձ զգեստ պայծառ եւ պարսպեա ընդդէմ ներգործութեան չարին, զի արժանի եղէց փառաւորել զքո փառաւորեալ անունդ. շնորհօք Տեառն մերոյ Յիսուսի Քրիստոսի որում վայելէ փառք, իշխանութիւն եւ պատիւ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Der, voghormootyamp kov zketso intz zkesd baydzaṙ yev barsbya ŭnttem nerkordzootyan charin, zi arjhani yeghets paṙavorel zko paṙavoryal anoont. shnorhok Dyaṙn mero Hisoosi Krisdosi voroom vayele paṙk, ishkhanootyoon yev badiv, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    In your mercy, Lord, clothe me with a radiant garment and fortify me against the influence of the evil one, that I may be worthy to glorify your glorious name, by the grace of our Lord, Jesus Christ, to whom is befitting glory, dominion and honor, now and always and unto the ages of ages. Amen
                </td>
            </tr>
            <tr>
                <td align="left">
                    Յետ զգեստաւորելոյ սրբազան զգեստուքն, ասէ.
                </td>
                <td align="left">
                    Hed zkesdavorelo srpazan zkesdookn, ase.
                </td>
                <td align="left">
                    After putting on the sacred vestments, he says
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ցնծասցէ անձն իմ ի Տէր, զի զգեցոյց ինձ հանդերձ փրկութեան եւ պատմուճան ուրախութեան, իբրեւ փեսայի եդ ինձ պսակ եւ որպէս զհարսն զարդու զարդարեաց զիս. շնորհօք Տեառն մերոյ Յիսուսի Քրիստոսի որում վայելէ փառք, իշխանութիւն եւ պատիւ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Tsndzastse antzn im i Der, zi zketsooyts intz hantertz prgootyan yev badmoojan oorakhootyan, iprev pesayi yet intz bsag yev vorbes zharsn zartoo zartaryats zis. shnorhok Dyaṙn mero Hisoosi Krisdosi voroom vayele paṙk, ishkhanootyoon yev badiv, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    My soul will rejoice in the Lord, for he has clothed me with a raiment of salvation and with a robe of gladness. He has put upon me a crown as upon a bridegroom and has adorned me like a bride with jewels, by the grace of our Lord, Jesus Christ, to whom is befitting glory, dominion and honor, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Թաշկինակին
                </td>
                <td align="left">
                    Tashginagin
                </td>
                <td align="left">
                    For the towel
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սրբեա, Տէր, զձեռս իմ յամենայն աղտեղութենէ մեղաց. շնորհօք Տեառն մերոյ Յիսուսի Քրիստոսի որում վայելէ փառք, իշխանութիւն եւ պատիւ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Srpya, Der, ztzeṙs im hamenayn aghdeghootene meghats. shnorhok Dyaṙn mero Hisoosi Krisdosi voroom vayele paṙk, ishkhanootyoon yev badiv, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Cleanse my hands, Lord, from all filthiness of sin, by the grace of our Lord, Jesus Christ, to whom is befitting glory, dominion and honor, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն, սարկաւագունքն եւ այլ սպասաւորք գան առաջի Սրբոյ Սեղանոյն։
                </td>
                <td align="left">
                    Kahanayn, sargavakoonkn yev ayl sbasavork kan aṙachi Srpo Seghanooyn:
                </td>
                <td align="left">
                    After the priest has vested, he processes from the vestry into the sanctuary while the choir sings the following:
                </td>
            </tr>
            <tr>
                <td align="left">
                    Խորհուրդ Խորին անհաս անսկիզբն որ զարդարեցեր զվերին պետութիւնդ, ի յառագաստ անմատոյց լուսոյն. գերապանծ փառօք զդասս հրեղինաց։
                </td>
                <td align="left">
                    Khorhoort Khorin anhas ansgizpn vor zartaretser zverin bedootyoont, i haṙakasd anmadooyts loosooyn. kerabandz paṙok ztass hreghinats:
                </td>
                <td align="left">
                    O mystery deep, inscrutable, without beginning, you have decked your supernal realm as a nuptial chamber to the light unapproachable and adorned with splendid glory the ranks of the fiery spirits.
                </td>
            </tr>
            <tr>
                <td align="left">
                    With ineffably wondrous power you created Adam, the lordly image, and clothed him with gracious glory in the paradise of Eden, the place of delights.
                </td>
                <td align="left">
                    With ineffably wondrous power you created Adam, the lordly image, and clothed him with gracious glory in the paradise of Eden, the place of delights.
                </td>
                <td align="left">
                    With ineffably wondrous power you created Adam, the lordly image, and clothed him with gracious glory in the paradise of Eden, the place of delights.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Through the passion of your holy Only-begotten all creation has been renewed and man has again been made immortal, adorned in an indespoilable raiment.
                </td>
                <td align="left">
                    Through the passion of your holy Only-begotten all creation has been renewed and man has again been made immortal, adorned in an indespoilable raiment.
                </td>
                <td align="left">
                    Through the passion of your holy Only-begotten all creation has been renewed and man has again been made immortal, adorned in an indespoilable raiment.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Թագաւոր երկնաւոր զԵկեցեցի քո անշարժ պահեա. եւ զերկրպագուս անուանդ քում պահեա ի խաղաղութեան։
                </td>
                <td align="left">
                    Takavor yergnavor zEgetsetsi ko ansharjh bahya. yev zergrbakoos anvant koom bahya i khaghaghootyan:
                </td>
                <td align="left">
                    Heavenly king, preserve your Church unshaken and keep in peace those who worship your name.
                </td>
            </tr>
            <tr>
                <td align="left">
                    ԼՈՒԱՑՈՒՄՆ
                </td>
                <td align="left">
                    LVATsOOMN
                </td>
                <td align="left">
                    PURIFICATION
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սաղմոս ԻԵ.
                </td>
                <td align="left">
                    Saghmos IE.
                </td>
                <td align="left">
                    Psalm 26
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քհն. Լուացից սրբութեամբ զձեռս իմ եւ շուրջ եղէց զսեղանով քով, Տէր։
                </td>
                <td align="left">
                    Khn. Lvatsits srpootyamp ztzeṙs im yev shoorch yeghets zseghanov kov, Der:
                </td>
                <td align="left">
                    Prs. I will wash my hands in innocence; and will go around your altar, O Lord.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սրկ. Դատ արա ինձ, Տէր, զի ես յամբծութեան իմում գնացի. ի Տէր յուսացայ, զի մի եղէց հիւանդ։
                </td>
                <td align="left">
                    Srg. Tad ara intz, Der, zi yes hampdzootyan imoom knatsi. i Der hoosatsa, zi mi yeghets hivant:
                </td>
                <td align="left">
                    Dcn. Judge me, O Lord, for I have walked in my integrity I have trusted in the Lord that I may not slip.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Փորձեա զիս, Տէր, եւ քննեա զիս. փորձեա զերիկամունս իմ եւ զսիրտ իմ։
                </td>
                <td align="left">
                    Portzya zis, Der, yev knnya zis. portzya zerigamoons im yev zsird im:
                </td>
                <td align="left">
                    Examine me, O Lord, and prove me; try out my mind and my heart.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ողորմութիւն քո, Տէր, առաջի աչաց իմոց եւ հաճոյ եղէց ճշմարտութեան քում։
                </td>
                <td align="left">
                    Voghormootyoon ko, Der, aṙachi achats imots yev hajo yeghets jshmardootyan koom:
                </td>
                <td align="left">
                    Your mercy, O Lord, is before my eyes; and I shall be well pleased with your truth.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ոչ նստայց ես յաթոռս նանրաց եւ ընդ անօրէնս ես ոչ մտից։
                </td>
                <td align="left">
                    Voch nsdayts yes hatoṙs nanrats yev ŭnt anorens yes voch mdits:
                </td>
                <td align="left">
                    I shall not sit in the seats of the vain; neither will I go in with the lawless.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ատեցի ես զժողովս չարաց եւ ընդ ամբարիշտս ես ոչ նստայց։
                </td>
                <td align="left">
                    Adetsi yes zjhoghovs charats yev ŭnt amparishds yes voch nsdayts:
                </td>
                <td align="left">
                    I have hated assembly of evildoers; I will not sit among the ungodly.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Լուացից սրբութեամբ զձեռս իմ եւ շուրջ եղէց զսեղանով քով, Տէր։
                </td>
                <td align="left">
                    Lvatsits srpootyamp ztzeṙs im yev shoorch yeghets zseghanov kov, Der:
                </td>
                <td align="left">
                    I will wash my hands in innocence; and I will go around your altar, O Lord.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Լսել ինձ զձայն օրհնութեան քո եւ պատմել զամենայն սքանչելիս քո։
                </td>
                <td align="left">
                    Lsel intz ztzayn orhnootyan ko yev badmel zamenayn skanchelis ko:
                </td>
                <td align="left">
                    That I may hear the voice of your blessing; and tell of all your wondrous works.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Տէր, սիրեցի զվայելչութիւն տան քո եւ զտեղի յարկի փառաց քոց։
                </td>
                <td align="left">
                    Der, siretsi zvayelchootyoon dan ko yev zdeghi hargi paṙats kots:
                </td>
                <td align="left">
                    Lord, I have loved the beauty of your house; and the place your glory dwells.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Մի կորուսաներ ընդ ամբարիշտս զանձն իմ եւ մի ընդ արս արիւնահեղս զկեանս իմ։
                </td>
                <td align="left">
                    Mi goroosaner ŭnt amparishds zantzn im yev mi ŭnt ars aryoonaheghs zgyans im:
                </td>
                <td align="left">
                    Destroy not my soul with the ungodly; nor my life with those who shed blood;
                </td>
            </tr>
            <tr>
                <td align="left">
                    Որոց ձեռք իւրեանց յանօրէնութեան են եւ աջ նոցա լի է կաշառօք։
                </td>
                <td align="left">
                    Vorots tzeṙk yooryants hanorenootyan yen yev ach notsa li e gashaṙok:
                </td>
                <td align="left">
                    Whose hands are in iniquity, and whose right hand is full of bribes.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ես յամբծութեան իմում գնացի. փրկեա զիս, Տէր, եւ ողորմեա ինձ։
                </td>
                <td align="left">
                    Yes hampdzootyan imoom knatsi. prgya zis, Der, yev voghormya intz:
                </td>
                <td align="left">
                    As for me, I have walked innocently; deliver me, O Lord, and be merciful to me.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ոտն իմ կացցէ յուղղութեան։
                </td>
                <td align="left">
                    Vodn im gatstse hooghghootyan:
                </td>
                <td align="left">
                    My foot shall stand aright;
                </td>
            </tr>
            <tr>
                <td align="left">
                    Յեկեղեցիս մեծս օրհնեցից զքեզ։
                </td>
                <td align="left">
                    Hegeghetsis medzs orhnetsits zkez:
                </td>
                <td align="left">
                    In the great congregations I will praise you.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Փառք Հօր եւ Որդւոյ եւ Հոգւոյն Սրբոյ.
                </td>
                <td align="left">
                    Paṙk Hor yev Vortvo yev Hokvooyn Srpo.
                </td>
                <td align="left">
                    Glory to the Father and to the Son and to the Holy Spirit,
                </td>
            </tr>
            <tr>
                <td align="left">
                    Այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Վասն սրբուհւոյ Աստուածածնին բարեխօսութեանն, Տէր, ընկալ զաղաչանս մեր եւ կեցո զմեզ։
                </td>
                <td align="left">
                    Vasn srpoohvo Asdvadzadznin parekhosootyann, Der, ŭngal zaghachans mer yev getso zmez:
                </td>
                <td align="left">
                    By the intercession of the holy Mother of God, O Lord, receive our supplications and save us.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սարկաւագն
                </td>
                <td align="left">
                    Sargavakn
                </td>
                <td align="left">
                    The Deacon
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սուրբ զԱստուածածինն եւ զամենայն սուրբս բարեխօս արասցուք առ Հայր ի յերկինս, զի կամեցեալ ողորմեսցի եւ գթացեալ կեցուսցէ զարարածս իւր։ Ամենակալ Տէր Աստուած մեր, կեցո եւ ողորմեա։
                </td>
                <td align="left">
                    Soorp zAsdvadzadzinn yev zamenayn soorps parekhos arastsook aṙ Hayr i hergins, zi gametsyal voghormestsi yev ktatsyal getsoostse zararadzs yoor: Amenagal Der Asdvadz mer, getso yev voghormya:
                </td>
                <td align="left">
                    Let us hold the holy Mother of God and all the saints as intercessors with the Father in heaven, that he may be pleased to have mercy and compassion on us, his creatures, and save us. Almighty Lord, our God, save us and have mercy on us.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ընկալ, Տէր, զաղաչանս մեր բարեխօսութեամբ սրբուհւոյ Աստուածածնին, անարատ ծնողի միածնի Որդւոյ քո, եւ աղաչանօք ամենայն սրբոց քոց։ Լուր մեզ, Տէր, եւ ողորմեա, ներեա, քաւեա եւ թող զմեղս մեր։ Արժանաւորեա գոհութեամբ փառաւորել զքեզ ընդ Որդւոյ եւ ընդ Սրբոյ Հոգւոյդ. այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Ŭngal, Der, zaghachans mer parekhosootyamp srpoohvo Asdvadzadznin, anarad dznoghi miadzni Vortvo ko, yev aghachanok amenayn srpots kots: Loor mez, Der, yev voghormya, nerya, kavya yev togh zmeghs mer: Arjhanavorya kohootyamp paṙavorel zkez ŭnt Vortvo yev ŭnt Srpo Hokvooyt. ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Lord, receive, our supplications through the intercession of the holy Mother of God, the immaculate bearer of your only-begotten Son, and by the supplications of all your saints. Hear us, Lord, and have mercy on us; forgive, expiate and remit our sins; make us worthy to give you thanks and to glorify you together with the Son and the Holy Spirit, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Խոստովանիմ առաջի Աստուծոյ եւ սրբուհւոյ Աստուածածնին եւ առաջի ամենայն սրբոց եւ առաջի ձեր, հարք եւ եղբարք, զամենայն մեղս զորս գործեալ եմ. քանզի մեղայ խորհրդով, բանիւ եւ գործով եւ ամենայն մեղօք զոր գործեն մարդիկ. մեղայ, մեղայ, աղաչեմ զձեզ, խնդրեցէք վասն իմ յԱստուծոյ զթողութիւն։
                </td>
                <td align="left">
                    Khosdovanim aṙachi Asdoodzo yev srpoohvo Asdvadzadznin yev aṙachi amenayn srpots yev aṙachi tzer, hark yev yeghpark, zamenayn meghs zors kordzyal yem. kanzi megha khorhrtov, paniv yev kordzov yev amenayn meghok zor kordzen martig. megha, megha, aghachem ztzez, khntretsek vasn im hAsdoodzo ztoghootyoon:
                </td>
                <td align="left">
                    I confess before God and before the holy Mother of God and before all the saints and before you (fathers and brothers), all the sins that I have committed; for I have sinned in thought, word and deed and with all the sins that men commit. I have sinned, I have sinned; I pray you, ask of God forgiveness for me.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ոմն ի քահանայից կամ որք մերձն են պատասխանեսցեն.
                </td>
                <td align="left">
                    Vomn i kahanayits gam vork mertzn yen badaskhanestsen.
                </td>
                <td align="left">
                    One of the priests or one nearby answers:
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ողորմեսցի քեզ Աստուած հզօրն եւ թողութիւն շնորհեսցէ ամենայն յանցանաց քոց, անցելոյն եւ այժմուս եւ յառաջիկայէն փրկեսցէ եւ հաստատեսցէ յամենայն գործս բարիս, եւ հանգուսցէ զքեզ ի հանդերձեալ կեանսն։ Ամէն։
                </td>
                <td align="left">
                    Voghormestsi kez Asdvadz hzorn yev toghootyoon shnorhestse amenayn hantsanats kots, antselooyn yev ayjhmoos yev haṙachigayen prgestse yev hasdadestse hamenayn kordzs paris, yev hankoostse zkez i hantertzyal gyansn: Amen:
                </td>
                <td align="left">
                    May God the almighty have mercy on you and grant you forgiveness of all your transgressions of the past and the present. May he deliver you from those that are to come, confirm you in all good works, and give you rest in the life of the age to come. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ազատեսցէ եւ զձեզ մարդասէրն Աստուած եւ թողցէ զամենայն յանցանս ձեր. տացէ ժամանակ ապաշխարելոյ եւ գործելոյ զբարիս. ուղղեսցէ եւ զառաջակայ կեանս ձեր շնորհօք Սուրբ Հոգւոյն, հզօրն եւ ողորմածն, եւ նմա փառք յաւիտեանս։ Ամէն։
                </td>
                <td align="left">
                    Azadestse yev ztzez martasern Asdvadz yev toghtse zamenayn hantsans tzer. datse jhamanag abashkharelo yev kordzelo zparis. ooghghestse yev zaṙachaga gyans tzer shnorhok Soorp Hokvooyn, hzorn yev voghormadzn, yev nma paṙk havidyans: Amen:
                </td>
                <td align="left">
                    May God, who loves mankind, also set you free and may he remit all your transgressions. May he give you time to repent and to do good works. May he also direct your life in the time to come by the grace of the Holy Spirit, the mighty and the merciful, and to him be glory forever. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Դպիրքն
                </td>
                <td align="left">
                    Tbirkn
                </td>
                <td align="left">
                    The People
                </td>
            </tr>
            <tr>
                <td align="left">
                    Յիշեսցջիր եւ զմեզ առաջի անմահ գառինն Աստուծոյ։
                </td>
                <td align="left">
                    Hishestschir yev zmez aṙachi anmah kaṙinn Asdoodzo։
                </td>
                <td align="left">
                    Remember us also before the immortal Lamb of God.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Յիշեալ լիջիք առաջի անմահ գառինն Աստուծոյ։
                </td>
                <td align="left">
                    Hishyal lichik aṙachi anmah kaṙinn Asdoodzo։
                </td>
                <td align="left">
                    You will be remembered before the immortal Lamb of God.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սաղմոս ՂԹ
                </td>
                <td align="left">
                    Saghmos GhT
                </td>
                <td align="left">
                    Psalm 100
                </td>
            </tr>
            <tr>
                <td align="left">
                    Աղաղակեցէք առ Տէր ամենայն երկիր, ծառայեցէք տեառն ուրախութեամբ։
                </td>
                <td align="left">
                    Aghaghagetsek aṙ Der amenayn yergir, dzaṙayetsek dyaṙn oorakhootyamp:
                </td>
                <td align="left">
                    Make a shout to the Lord, all lands; serve the Lord with gladness.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Մտէք առաջի նորա ցնծութեամբ. ծաներուք զի նա է Տէր Աստուած մեր։
                </td>
                <td align="left">
                    Mdek aṙachi nora tsndzootyamp. dzanerook zi na e Der Asdvadz mer:
                </td>
                <td align="left">
                    Enter into his presence with joy; know that he is the Lord our God.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Նա արար զմեզ եւ ոչ մեք էաք, մեք ժողովուրդ եւ խաշն արօտի նորա։
                </td>
                <td align="left">
                    Na arar zmez yev voch mek eak, mek jhoghovoort yev khashn arodi nora:
                </td>
                <td align="left">
                    It is he who made us and we were not by ourselves; we are his people and the sheep of his pasture.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Մտէք ընդ դրունս նորա խոստովանութեամբ, եւ օրհնութեամբ՝ ի յարկս նորա։
                </td>
                <td align="left">
                    Mdek ŭnt troons nora khosdovanootyamp, yev orhnootyamp՝ i hargs nora:
                </td>
                <td align="left">
                    Enter into his gates with thanksgiving; and into his courts with praise.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Խոստովան եղերուք տեառն, եւ օրհնեցէք զանուն նորա։
                </td>
                <td align="left">
                    Khosdovan yegherook dyaṙn, yev orhnetsek zanoon nora:
                </td>
                <td align="left">
                    Be thankful to the Lord; and bless his name.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քաղցր է Տէր, յաւիտեան է ողորմութիւն նորա. յազգէ մինչեւ յազգ է ճշմարտութիւն նորա։
                </td>
                <td align="left">
                    Kaghtsr e Der, havidyan e voghormootyoon nora. hazke minchev hazk e jshmardootyoon nora:
                </td>
                <td align="left">
                    The Lord is gracious, his mercy is everlasting; and his truth endures from generation to generation.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Փառք Հօր եւ Որդւոյ եւ Հոգւոյն Սրբոյ.
                </td>
                <td align="left">
                    Paṙk Hor yev Vortvo yev Hokvooyn Srpo.
                </td>
                <td align="left">
                    Glory to the Father and to the Son and to the Holy Spirit,
                </td>
            </tr>
            <tr>
                <td align="left">
                    Այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սարկաւագն
                </td>
                <td align="left">
                    Sargavakn
                </td>
                <td align="left">
                    The Deacon
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սուրբ եկեղեցեաւս աղաչեսցուք զՏէր, զի սովաւ փրկեսցէ զմեզ ի մեղաց եւ կեցուսցէ շնորհիւ ողորմութեան իւրոյ։ Ամենակալ Տէր Աստուած մեր, կեցո եւ ողորմեա։
                </td>
                <td align="left">
                    Soorp yegeghetsyavs aghachestsook zDer, zi sovav prgestse zmez i meghats yev getsoostse shnorhiv voghormootyan yooro։ Amenagal Der Asdvadz mer, getso yev voghormya:
                </td>
                <td align="left">
                    Through the holy Church let us beseech the Lord that through her he may deliver us from sin and may save us by the grace of his mercy. Almighty Lord our God, save us and have mercy.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ի մէջ տաճարիս եւ առաջի աստուածընկալ եւ պայծառացեալ սուրբ նշանացս եւ սուրբ տեղւոյս, խորահեալ երկիւղիւ երկիրպագանեմք։ Զսուրբ եւ զհրաշալի եւ զյաղթող (զտէրութիւնդ) քո օրհնեմք եւ փառաւորեմք, եւ քեզ մատուցանեմք զօրհնութիւն եւ զփառս, ընդ Հօր եւ ընդ Հոգւոյդ Սրբոյ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    I mech dajaris yev aṙachi asdvadzŭngal yev baydzaṙatsyal soorp nshanatss yev soorp deghvooys, khorahyal yergyooghiv yergirbakanemk: Zsoorp yev zhrashali yev zhaghtogh (zderootyoont) ko orhnemk yev paṙavoremk, yev kez madootsanemk zorhnootyoon yev zpaṙs, ŭnt Hor yev ŭnt Hokvooyt Srpo, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    In the midst of this temple, Lord, and before these holy signs and before this holy place that hold God up to us and are made resplendent, we bow down in awe and worship; we glorify your holy, wondrous and triumphant lordship, and we offer praise and glory to you with the Father and with the Holy Spirit, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն եւ սպասաւորք սեղանոյն ելցեն ի խորանն՝ ասելով
                </td>
                <td align="left">
                    Kahanayn yev sbasavork seghanooyn yeltsen i khorann՝ aselov
                </td>
                <td align="left">
                    And going up to the altar, the priest says with the deacon
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սաղմոս ԽԲ.
                </td>
                <td align="left">
                    Saghmos KhP.
                </td>
                <td align="left">
                    Psalm 43
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քհն. Մտից առաջի սեղանոյ Աստուծոյ, առ Աստուած՝ որ ուրախ առնէ զմանկութիւն իմ։
                </td>
                <td align="left">
                    Khn. Mdits aṙachi seghano Asdoodzo, aṙ Asdvadz՝ vor oorakh aṙne zmangootyoon im:
                </td>
                <td align="left">
                    I will go in before the altar of God; to God who makes my youth joyful.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սրկ. Դատ արա ինձ Աստուած, եւ իրաւ արա ինձ ի դատաստանի իմում։
                </td>
                <td align="left">
                    Srg. Tad ara intz Asdvadz, yev irav ara intz i tadasdani imoom:
                </td>
                <td align="left">
                    Judge me, O God; do justice to me in my trial.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Յազգէ որ ոչ է սուրբ, ի մարդոյ մեղաւորէ, նենգաւորէ, փրկեա զիս։
                </td>
                <td align="left">
                    Hazke vor voch e soorp, i marto meghavore, nenkavore, prgya zis:
                </td>
                <td align="left">
                    Deliver me from a generation that is not holy; from a sinful and deceitful person.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Դու, Աստուած, հզօրիչ իմ ես. ընդէ՞ր մոռացար զիս, ընդէ՞ր տրտում գնամ ես ի նեղել թշնամւոյ իմոյ։
                </td>
                <td align="left">
                    Too, Asdvadz, hzorich im yes. ŭnte՞r moṙatsar zis, ŭnte՞r drdoom knam yes i neghel tshnamvo imo։
                </td>
                <td align="left">
                    You, God,  are the giver of my strength; why have you forgotten me? Why do I go sadly while my enemy oppresses me?
                </td>
            </tr>
            <tr>
                <td align="left">
                    Առաքեա, Տէր, զլոյս քո եւ զճշմարտութիւնս քո, զի առաջնորդեսցեն ինձ եւ հանցեն զիս ի լեառն սուրբ եւ ի յարկս քո։
                </td>
                <td align="left">
                    Aṙakya, Der, zlooys ko yev zjshmardootyoons ko, zi aṙachnortestsen intz yev hantsen zis i lyaṙn soorp yev i hargs ko:
                </td>
                <td align="left">
                    Send out, O Lord, your light and your truth that they may lead me and bring me to your holy mountain and to your tabernacle.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Մտից առաջի սեղանոյ Աստուծոյ, առ Աստուած՝ որ ուրախ առնէ զմանկութիւն իմ։
                </td>
                <td align="left">
                    Mdits aṙachi seghano Asdoodzo, aṙ Asdvadz՝ vor oorakh aṙne zmangootyoon im:
                </td>
                <td align="left">
                    I will go in before the altar of God; to God who makes my youth joyful.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Խոստովան եղէց քեզ օրհնութեամբ, Աստուած, Աստուած իմ։
                </td>
                <td align="left">
                    Khosdovan yeghets kez orhnootyamp, Asdvadz, Asdvadz im:
                </td>
                <td align="left">
                    I will give thanks to you with praises, O God my God.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Արդ, ընդէ՞ր տրտում ես անձն իմ կամ ընդէ՞ր խռովես զիս. յուսա առ Աստուած, խոստովանեա նմա, փրկիչ երեսաց իմոց Աստուած է։
                </td>
                <td align="left">
                    Art, ŭnte՞r drdoom yes antzn im gam ŭnte՞r khṙoves zis. hoosa aṙ Asdvadz, khosdovanya nma, prgich yeresats imots Asdvadz e:
                </td>
                <td align="left">
                    Then why are you grieved, O my soul, and why do you trouble me? Hope in God, give thanks to him; the deliverer of my countenance is God.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Փառք Հօր եւ Որդւոյ եւ Հոգւոյն Սրբոյ.
                </td>
                <td align="left">
                    Paṙk Hor yev Vortvo yev Hokvooyn Srpo.
                </td>
                <td align="left">
                    Glory to the Father and to the Son and to the Holy Spirit,
                </td>
            </tr>
            <tr>
                <td align="left">
                    Այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սարկաւագն
                </td>
                <td align="left">
                    Sargavakn
                </td>
                <td align="left">
                    The Deacon
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ եւս խաղաղութեան զՏէր աղաչեսցուք։
                </td>
                <td align="left">
                    Yev yevs khaghaghootyan zDer aghachestsook:
                </td>
                <td align="left">
                    Again in peace let us beseech the Lord.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Օրհնեսցուք զՀայր Տեառն մերոյ Յիսուսի Քրիստոսի, որ արժանի արար զմեզ կալ ի տեղւոջս փառաբանութեան եւ երգել զերգս հոգեւորս։
                </td>
                <td align="left">
                    Orhnestsook zHayr Dyaṙn mero Hisoosi Krisdosi, vor arjhani arar zmez gal i deghvochs paṙapanootyan yev yerkel zerks hokevors:
                </td>
                <td align="left">
                    Let us bless the Father of our Lord Jesus Christ, who has made us worthy to stand in this place of praise and to sing spiritual songs.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ամենակալ Տէր Աստուած մեր, կեցո եւ ողորմեա։
                </td>
                <td align="left">
                    Amenagal Der Asdvadz mer, getso yev voghormya:
                </td>
                <td align="left">
                    Almighty Lord our God, save us and have mercy.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ի յարկի սրբութեան եւ ի տեղւոջս փառաբանութեան, հրեշտակաց բնակարանիս եւ մարդկան քաւարանիս, առաջի աստուածընկալ եւ պայծառացեալ սուրբ նշանացս եւ սուրբ տեղւոյս, խոնարհեալ երկիւղիւ երկիրպագանեմք. զսուրբ եւ զհրաշալի եւ զյաղթող (զտէրութիւնդ) քո օրհնեմք եւ փառաւորեմք, եւ քեզ ընդ երկնային զօրսն մատուցանեմք զօրհնութիւն եւ զփառս, ընդ Հօր եւ ընդ Հոգւոյդ Սրբոյ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    I hargi srpootyan yev i deghvochs paṙapanootyan, hreshdagats pnagaranis yev martgan kavaranis, aṙachi asdvadzŭngal yev baydzaṙatsyal soorp nshanatss yev soorp deghvooys, khonarhyal yergyooghiv yergirbakanemk. zsoorp yev zhrashali yev zhaghtogh (zderootyoont) ko orhnemk yev paṙavoremk, yev kez ŭnt yergnayin zorsn madootsanemk zorhnootyoon yev zpaṙs, ŭnt Hor yev ŭnt Hokvooyt Srpo, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    In this dwelling of holiness, this place of praise; in this habitation of angels, this place of the expiation of mankind; before these holy signs and the holy place that hold God up to us and are made resplendent, we bow down in awe and worship. We bless and glorify your holy, wondrous and triumphant lordship and, together with the heavenly hosts, we offer blessing and glory to you with the Father and the Holy Spirit, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եթէ պատարագիչն քահանայ իցէ աստ քարշեսցեն զվարագոյրն եւ դպիրքն երգեն զմեղեդին ըստ պատշաճի աւուրն։ Իսկ եթէ եպիսկոպոս իցէ պատարագիչն՝ դպիրքն եղանակեն զԸնտրեալդն մինչ պատարագիչն կարդայ աղօթք Սրբոյն Գրիգորի Նարեկացւոյ։ 
                </td>
                <td align="left">
                    Yete badarakichn kahana itse asd karshestsen zvarakooyrn yev tbirkn yerken zmeghetin ŭsd badshaji avoorn: Isg yete yebisgobos itse badarakichn՝ tbirkn yeghanagen zŬndryaltn minch badarakichn garta aghotk Srpooyn Krikori Naregatsvo։ 
                </td>
                <td align="left">
                    If the celebrant is a bishop, the choir sings “O Chosen of God” while the bishop is inaudibly saying the prayer to the Holy Spirit. But if the celebrant is a priest, the curtain is closed and the choir sings a melody proper to the day.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Աղօթք առ Սուրբ Հոգին Գրիգորի Նարեկացւոյն (Բան ԼԳ)։
                </td>
                <td align="left">
                    Aghotk aṙ Soorp Hokin Krikori Naregatsvooyn (Pan LK):
                </td>
                <td align="left">
                    Prayer to the Holy Spirit by St. Gregory of Narek (33)
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ամենակալ, բարերար, մարդասէր, Աստուած բոլորից, յօրինող երեւութից եւ աներեւութից, փրկող եւ հաստատող, խնամող եւ խաղաղարար, Հօր հզօր Հոգի, հայցեմք բազկատարած մաղթանաց գոչմամբ հեծութեան, յանդիման եղեալ քեզ ահաւորիդ։
                </td>
                <td align="left">
                    Amenagal, parerar, martaser, Asdvadz polorits, horinogh yerevootits yev anerevootits, prgogh yev hasdadogh, khnamogh yev khaghagharar, Hor hzor Hoki, haytsemk pazgadaradz maghtanats kochmamp hedzootyan, hantiman yeghyal kez ahavorit:
                </td>
                <td align="left">
                    Almighty, beneficent, lover of humankind, God of all, maker of things seen and unseen, savior and restorer, provident and peacemaker, O mighty Spirit of the Father, we implore you with open arms and pray, sobbing, in your awe-inspiring presence.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Մատչիմք մեծաւ դողութեամբ, սաստիկ երկիւղիւ մատուցանել նախ զբանականս զայս պատարագ քում անզնին զօրութեանդ, իբր աթոռակցի, փառակցի եւ արարչակցի հայրենի անկապուտ պատւոյդ, եւ քննողի ծածկութեան խորոց խորհրդոց ամենակատար կամաց Հօրդ Էմմանուէլի, զքեզ առաքչի, փրկչի եւ կենդանատուի եւ արարչի ամենայնի։
                </td>
                <td align="left">
                    Madchimk medzav toghootyamp, sasdig yergyooghiv madootsanel nakh zpanagans zays badarak koom anznin zorootyant, ipr atoṙagtsi, paṙagtsi yev ararchagtsi hayreni angabood badvooyt, yev knnoghi dzadzgootyan khorots khorhrtots amenagadar gamats Hort Emmanveli, zkez aṙakchi, prgchi yev gentanadvi yev ararchi amenayni:
                </td>
                <td align="left">
                    We draw near with much trembling and utmost trepidation to offer first this intelligible sacrifice to your inscrutable power, as One who shares the inalienable honor of the Father in reign, in glory and in creation; to you, the searcher of the hidden depths of the mysteries of the most perfect will of the Father of Emmanuel, who sends you and who is the Savior, the Giver of life and the Creator of all. 
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ի ձեռն քո ծանուցաւ մեզ երրեակ անձնաւորութիւն միասնական Աստուածութեանդ, յորոց մի եւ դու ճանաչիս անհաս։ Քեզ ի ձեռն քո առաջինքն նահապետական տոհմին շառաւիղք, տեսանողք անուանակոչեալք, զանցեալսն եւ զգալոցսն, զեղեալսն եւ զոչ գոյացեալսն անստուերաբար բարբառով բանի վերապատուեցին։ 
                </td>
                <td align="left">
                    I tzeṙn ko dzanootsav mez yerryag antznavorootyoon miasnagan Asdvadzootyant, horots mi yev too janachis anhas: Kez i tzeṙn ko aṙachinkn nahabedagan dohmin shaṙavighk, desanoghk anvanagochyalk, zantsyalsn yev zkalotssn, zeghyalsn yev zoch kooyatsyalsn ansdverapar parpaṙov pani verabadvetsin: 
                </td>
                <td align="left">
                    Through you the three persons of the One Godhead were made known to us, O incomprehensible One who is recognized as one among them. In you and through you the early descendents of the patriarchal family, called seers, recounted in plain language the things past and the things to come, those that had happened and those that are yet to happen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Հոգի Աստուծոյ, քարոզեալ զքեզ Մովսիսի. որ ի գնալն քո ի վերայ ջուրցն, անպարագիր զօրութիւն, ահեղ շըրջարկութեամբ տածողականաւ՝ թեւապարփակ պաշտպանողօրէն գթասիրեալ ի ծնունդս նորոգս, զաւազանին խորհուրդ ծանուցեր։ Յոր կերպարան օրինականութեան՝ նախ քան զկառուցանել զլոյծդ մածուած վերջնում վարագուրիդ՝ յօրինեցեր, կարող, տիրապէս զբովանդակ բնութիւնս ամենից բնաւից բոլորից գոյից ամենայն էից յանէից։
                </td>
                <td align="left">
                    Hoki Asdoodzo, karozyal zkez Movsisi. vor i knaln ko i vera choortsn, anbarakir zorootyoon, ahegh shŭrchargootyamp dadzoghaganav՝ tevabarpag bashdbanoghoren ktasiryal i dznoonts noroks, zavazanin khorhoort dzanootser: Hor gerbaran orinaganootyan՝ nakh kan zgaṙootsanel zlooydzt madzvadz verchnoom varakoorit՝ horinetser, garogh, dirabes zpovantag pnootyoons amenits pnavits polorits kooyits amenayn eits haneits:
                </td>
                <td align="left">
                     O Spirit of God, by having proclaimed yourself through Moses as the one moving over the waters, boundless power that you are, and by your overwhelming, encircling care, brooding and protecting the newly-born under your wings with compassion, you made known the mystery of the baptismal font.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քեւ ստեղծանին ի նորոգութիւն յարութեան ամենայն եղեալքս առ ի քէն յայնմ ժամանակի՝ որ է օր վերջին այսմ կենցաղի եւ օր առաջին յերկրին կենդանեաց։ Քեզ հնազանդեցաւ միութեամբ կամացն՝ որպէս հօրն իւրում, ազգակիցն քո, էակիցն Հօր, անդրանիկն Որդի, մերովս կերպիւ. զքեզ աւետարանեաց ճշմարիտ Աստուած՝ հաւասար եւ համագոյ Հօր իւր հզօրի. եւ զառ ի քեզ հայհոյութիւնն անքաւելի քարոզեաց. եւ իբր զԱստուածամարտիցն՝ զքո հեստելոցն չարաբանական բերանս կարկեաց. եւ զիւրըն շընորհեաց արդարն եւ անարատն, գտիչն ամենայնի, որ վասն մեղաց մերոց մատնեցաւ, եւ յարեաւ վասն զմեզ արդարացուցանելոյ։
                </td>
                <td align="left">
                    Kev sdeghdzanin i norokootyoon harootyan amenayn yeghyalks aṙ i ken haynm jhamanagi՝ vor e or verchin aysm gentsaghi yev or aṙachin hergrin gentanyats: Kez hnazantetsav miootyamp gamatsn՝ vorbes horn yooroom, azkagitsn ko, eagitsn Hor, antranign Vorti, merovs gerbiv. zkez avedaranyats jshmarid Asdvadz՝ havasar yev hamako Hor yoor hzori. yev zaṙ i kez hayhooyootyoonn ankaveli karozyats. yev ipr zAsdvadzamarditsn՝ zko hesdelotsn charapanagan perans gargyats. yev zyoorŭn shŭnorhyats artarn yev anaradn, kdichn amenayni, vor vasn meghats merots madnetsav, yev haryav vasn zmez artaratsootsanelo։
                </td>
                <td align="left">
                    In the pattern of the archetype, before constructing the pliable substance with its final covering, you formed in lordly fashion, O Mighty one, the complete natures of all things out of nothing, of all beings, of all existences out of no existence. Through you shall all these your creatures be renewed at the resurrection, in that time which is the last day of this life and the first day in the land of the living. The first-born Son, being your kin and of the same essence of the Father, obeyed you also with oneness of will, as he did his Father. While in our likeness, he proclaimed you as true God, equal and consubstantial to his mighty Father. He declared blasphemy against you to be unforgivable and he stopped the impious mouths of those who rebel against you, as of those who fight against God, though he forgave blasphemy against himself, the righteous and the spotless one, finder of all, who was betrayed for our sins and rose for our justification.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Նմա փառք ի ձեռն քո, եւ քեզ բարեբանութիւն ընդ Հօր ամենակալի, յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Nma paṙk i tzeṙn ko, yev kez parepanootyoon ŭnt Hor amenagali, havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Glory to him through you, and praise to you with the Father almighty, unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Դարձեալ կրկնեցից ի նոյն կարգ բանի, մինչեւ վստահութիւն վերհայեցողութեան լուսոյ հրաշապէս յայտնեսցի, ազդեալ, աւետարանեալ վերստին կրկին զխաղաղութիւն։
                </td>
                <td align="left">
                    Tartzyal grgnetsits i nooyn gark pani, minchev vsdahootyoon verhayetsoghootyan looso hrashabes haydnestsi, aztyal, avedaranyal versdin grgin zkhaghaghootyoon:
                </td>
                <td align="left">
                    I shall go on repeating in the same sequence of words until the certainty in the upward contemplation of light is miraculously revealed, stirring us to proclaim anew the good news of ever more peace.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Աղաչեմք եւ աղերսեմք արտասուալից հառաչմամբ յամենայն անձնէ զփառաւորեալ արարչութիւնդ՝ անեղծ եւ անստեղծ անժամանակ Հոգւոյդ գթածի, որ բարեխօսդ ես վասն մեր յանմռունչ հեծութիւնս առ ողորմածդ Հայր. որ զսուրբսն պահես եւ զմեղուցեալսն մաքրես եւ տաճարս կազմես կենդանի եւ կեցուցիչ կամաց բարձեալդ Հօր։
                </td>
                <td align="left">
                    Aghachemk yev aghersemk ardasvalits haṙachmamp hamenayn antzne zpaṙavoryal ararchootyoont՝ aneghdz yev ansdeghdz anjhamanag Hokvooyt ktadzi, vor parekhost yes vasn mer hanmṙoonch hedzootyoons aṙ voghormadzt Hayr. vor zsoorpsn bahes yev zmeghootsyalsn makres yev dajars gazmes gentani yev getsootsich gamats partzyalt Hor:
                </td>
                <td align="left">
                    We beseech and implore you with tearful sighs from our utmost being, O glorified Creator, incorruptible and uncreated, eternal and compassionate Spirit, who with unutterable implorations intercede for us with the merciful Father. You keep the saints, you cleanse the sinners and you make them temples of the living and life-giving will of the exalted Father.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Արդ՝ ազատեա զմեզ յամենայն անմաքուր գործոց, որ ոչ է հաճոյ քումդ բնակութեան. եւ մի շիջցին առ ի մէնջ լուսոյդ շնորհաց փայլմունք ի տեսականացս աչաց իմաստից. վասն զի զքեզ ուսաք միանալ ի մեզ ի ձեռն աղօթից եւ ընտիր վարուց խնկելոց։
                </td>
                <td align="left">
                    Art՝ azadya zmez hamenayn anmakoor kordzots, vor voch e hajo koomt pnagootyan. yev mi shichtsin aṙ i mench loosooyt shnorhats paylmoonk i desaganatss achats imasdits. vasn zi zkez oosak mianal i mez i tzeṙn aghotits yev ŭndir varoots khngelots:
                </td>
                <td align="left">
                    Deliver us now from all unclean deeds that are not proper for those in whom you dwell, and may the shining light of your gifts not be extinguished within the reflective eyes of our understanding, for we have learned that you do unite with us in prayer and in commendable lives that are offered as incense.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ քանզի մինդ յԵրրորդութենէդ պատարագի, եւ միւսդ ընդունի՝ հաճեալ ընդ մեզ հաշտարար արեամբ անդրանկի իւրոյ. իսկ դու ընկալցիս զմեր պաղատանս եւ յարդարես զմեզ օթեւանս պատուականս ամենայն պատրաստութեամբ ի վայելումն ճաշակման երկնաւոր գառինդ, առանց պատժոց դատապարտութեան ընդունիլ զայս անմահացուցիչ մանանայս կենաց նորոյ փրկութեան։
                </td>
                <td align="left">
                    Yev kanzi mint hErrortootenet badaraki, yev myoost ŭntooni՝ hajyal ŭnt mez hashdarar aryamp antrangi yooro. isg too ŭngaltsis zmer baghadans yev hartares zmez otevans badvagans amenayn badrasdootyamp i vayeloomn jashagman yergnavor kaṙint, aṙants badjhots tadabardootyan ŭntoonil zays anmahatsootsich mananays genats noro prgootyan:
                </td>
                <td align="left">
                    And inasmuch as one of the Trinity is being offered and another accepts the sacrifice, pleased with us through the reconciling blood of his First-born, so may you also accept our supplications and prepare us to be honored dwellings, always ready to partake worthily of the heavenly Lamb, to receive without the sentence of condemnation this manna of life eternal, of the new deliverance.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ հալեսցի ի հրոյս յայսմանէ գայթակղութիւնս մեր, որպէս մարգարէին կենդանախարոյկ կայծակամբն ի ձեռն ունելեացն մատուցման. զի յամենայնի քոյդ քարոզեսցի գթութիւն, որպէս Որդւովդ Աստուծոյ Հօր քաղցրութիւն. որ զանառակ որդին մերձեցոյց ի հայրենի ժառանգութիւնն, եւ զպոռնիկսն յառաջեցոյց յերկնային արքայութիւնն արդարոցն երանութեան։
                </td>
                <td align="left">
                    Yev halestsi i hrooys haysmane kaytagghootyoons mer, vorbes markarein gentanakharooyg gaydzagampn i tzeṙn oonelyatsn madootsman. zi hamenayni kooyt karozestsi ktootyoon, vorbes Vortvovt Asdoodzo Hor kaghtsrootyoon. vor zanaṙag vortin mertzetsooyts i hayreni jhaṙankootyoonn, yev zboṙnigsn haṙachetsooyts hergnayin arkayootyoonn artarotsn yeranootyan:
                </td>
                <td align="left">
                    And may our faltering be consumed by this fire, as that of the Prophet was consumed by the live burning coal offered to him with the tongs, so that in everything your mercy may be proclaimed, as the loving kindness of the Father was proclaimed through the Son, who brought the prodigal son back to the paternal inheritance and led the harlots into the heavenly kingdom, that blessed realm of the righteous. 
                </td>
            </tr>
            <tr>
                <td align="left">
                    Այո, այո, եւ ես մի եմ ի նոցանէ, եւ զիս ընկալ ընդ նոսին իբր մարդասիրութեան կարօտեալ մեծի, շնորհօք քո ապրեալ, զարեամբ Քրիստոսի ստացեալս։ Զի եւ յայսմ ամենայնի՝ յամենայնի ծանիցի քո Աստուածութիւնդ, ընդ Հօր փառաւորեալ համապատուաբար ի մի կամս, եւ ի մի իշխանութիւն գովութեան։
                </td>
                <td align="left">
                    Ayo, ayo, yev yes mi yem i notsane, yev zis ŭngal ŭnt nosin ipr martasirootyan garodyal medzi, shnorhok ko abryal, zaryamp Krisdosi sdatsyals: Zi yev haysm amenayni՝ hamenayni dzanitsi ko Asdvadzootyoont, ŭnt Hor paṙavoryal hamabadvapar i mi gams, yev i mi ishkhanootyoon kovootyan:
                </td>
                <td align="left">
                    Yes, indeed! I too am one of them. Receive me also with them as one who is in need of much of that love for humankind, as one who is saved by your grace and redeemed by the blood of Christ; so that your divinity may be made known to all and in all, being glorified with the Father, equal in honor, one in will and one in lordship most praised.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Դպիրքն
                </td>
                <td align="left">
                    Tbirkn
                </td>
                <td align="left">
                    The People
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ընտրեալդ յԱստուծոյ, ո՛վ երջանիկ սուրբ քահանայ։ Նմանեալ Ահարոնի եւ Մովսէսի մարգարէին, այնմ, որ զգեստուցն էր յօրինող, զոր Ահարոն միշտ զգենոյր։
                </td>
                <td align="left">
                    Ŭndryalt hAsdoodzo, o՛v yerchanig soorp kahana։ Nmanyal Aharoni yev Movsesi markarein, aynm, vor zkesdootsn er horinogh, zor Aharon mishd zkenooyr:
                </td>
                <td align="left">
                    Chosen of God, O blessed holy priest, you resemble Aaron and Moses the Prophet, who prepared the garments which Aaron always wore.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Յօրինէր զպատմուճանն, զոր ՚ի չորից կազմեալ նիւթոց. ՚ի կարմրոյ, ՚ի կապուտոյ, ՚ի բեհեզոյ, ՚ի ծիրանւոյ։ Թել զթելն յօրինէր, կարգն առաջին էր կարկեհան։
                </td>
                <td align="left">
                    Horiner zbadmoojann, zor ՚i chorits gazmyal nyootots. ՚i garmro, ՚i gaboodo, ՚i pehezo, ՚i dziranvo։ Tel zteln horiner, garkn aṙachin er gargehan:
                </td>
                <td align="left">
                    He fashioned the robe of linen woven of four elements; in scarlet, blue, gold, and purple. Threads upon threads were worked in. The first row was of carbuncle.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ օծումն գրապանին շուրջանակի բոլորաշէն։ Եւ յընթացս գարշապարին հնչէր երկիր, ցնծայր խորանն։ Արդ ՚ի նոյն նմանութեան Քրիստոս զմեր Տէրս յօրինէ։
                </td>
                <td align="left">
                    Yev odzoomn krabanin shoorchanagi polorashen: Yev hŭntatss karshabarin hncher yergir, tsndzayr khorann: Art ՚i nooyn nmanootyan Krisdos zmer Ders horine:
                </td>
                <td align="left">
                    And the anointing oil runs down the hem of the garments. And during this awesome process the earth resounded and the tabernacle rejoiced. Now in the same way Christ forms our Priest.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Յորժամ մտցես ՚ի սուրբ խորանն, անդ յիշեսցես զմեր ննջեցեալսն։ Յորժամ առնես զպատարագն, յիշեա՛ եւ զիս զբազմամեղսն, զի եւ մեզ ողորմեսցի ՚ի միւս անգամ Իւր գալստեանն։
                </td>
                <td align="left">
                    Horjham mdtses ՚i soorp khorann, ant hishestses zmer nnchetsyalsn: Horjham aṙnes zbadarakn, hishya՛ yev zis zpazmameghsn, zi yev mez voghormestsi ՚i myoos ankam Yoor kalsdyann:
                </td>
                <td align="left">
                    When you enter into the holy tabernacle, remember therein our dead: When you receive the offering, remember me, the sinner, so that He may have mercy on us at His next coming:
                </td>
            </tr>
            <tr>
                <td align="left">
                    Հօրն փառք, Որդւոյն պատիւ եւ Սուրբ Հոգւոյն այժմ յաւիտեան, յաւիտեանս յաւիտենից Քրիստոս օրհնեալ ՚ի համայնից։
                </td>
                <td align="left">
                    Horn paṙk, Vortvooyn badiv yev Soorp Hokvooyn ayjhm havidyan, havidyans havidenits Krisdos orhnyal ՚i hamaynits:
                </td>
                <td align="left">
                    Glory be to the Father, to the glory of the Son, and to the Holy Spirit forever and ever, blessed be Christ forever and ever.
                </td>
            </tr>
            <tr>
                <td align="left">
                    ՊԱՏՐԱՍՏՈՒԹԻՒՆ
                </td>
                <td align="left">
                    BADRASDOOTIVN
                </td>
                <td align="left">
                    PREPARATION
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սարկաւագն
                </td>
                <td align="left">
                    Sargavakn
                </td>
                <td align="left">
                    The Deacon
                </td>
            </tr>
            <tr>
                <td align="left">
                    Օրհնեա, Տէր։
                </td>
                <td align="left">
                    Orhnya, Der:
                </td>
                <td align="left">
                    Bless, Lord.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Զի քո է գթութիւն եւ կարողութիւն եւ մարդասիրութիւն, զօրութիւն եւ փառք, յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Zi ko e ktootyoon yev garoghootyoon yev martasirootyoon, zorootyoon yev paṙk, havidyans havidenits: Amen:
                </td>
                <td align="left">
                    For yours is the compassion, the power, the loving kindness, the strength and the glory unto the ages.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ձգեսցեն զվարագոյրն։
                </td>
                <td align="left">
                    Tzkestsen zvarakooyrn:
                </td>
                <td align="left">
                    The curtain is closed.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Մատուցանէ սարկաւագն զնշխարն՝ ասելով.
                </td>
                <td align="left">
                    Madootsane sargavakn znshkharn՝ aselov.
                </td>
                <td align="left">
                    The deacon offers the nshkhar, saying:
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ եւս խաղաղութեան զՏէր աղաչեսցուք։ 
                </td>
                <td align="left">
                    Yev yevs khaghaghootyan zDer aghachestsook: 
                </td>
                <td align="left">
                    Again in peace let us beseech the Lord.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ընկալ, կեցո եւ ողորմեա։
                </td>
                <td align="left">
                    Ŭngal, getso yev voghormya:
                </td>
                <td align="left">
                    Receive us, save us, and have mercy on us.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ քահանայն խաչակնքէ ի վերայ նշխարին՝ ասելով.
                </td>
                <td align="left">
                    Yev kahanayn khachagnke i vera nshkharin՝ aselov.
                </td>
                <td align="left">
                    And the celebrant makes the sign of the cross over the nshkhar, saying
                </td>
            </tr>
            <tr>
                <td align="left">
                    Օրհնութիւն եւ փառք Հօր եւ Որդւոյ եւ Հոգւոյն Սրբոյ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Orhnootyoon yev paṙk Hor yev Vortvo yev Hokvooyn Srpo, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Blessing and glory to the Father and to the Son and to the Holy Spirit, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ առեալ քահանայն զնշխարն դնէ ի մաղզմայն՝ ասելով.
                </td>
                <td align="left">
                    Yev aṙyal kahanayn znshkharn tne i maghzmayn՝ aselov.
                </td>
                <td align="left">
                    And taking the nshkhar the priest places it in the patten, saying
                </td>
            </tr>
            <tr>
                <td align="left">
                    Յիշատակ Տեառն մերոյ Յիսուսի Քրիստոսի որ բազմեալ հանգչի յանարուեստ աթոռ։
                </td>
                <td align="left">
                    Hishadag Dyaṙn mero Hisoosi Krisdosi vor pazmyal hankchi hanarvesd atoṙ:
                </td>
                <td align="left">
                    Remembrance of our Lord Jesus Christ, who is seated on the throne not made with hands.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Զմահ խաչի յանձն էառ վասն ազգի մարդկան։
                </td>
                <td align="left">
                    Zmah khachi hantzn eaṙ vasn azki martgan:
                </td>
                <td align="left">
                    He accepted the death of the cross for mankind.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Օրհնեցէք, գովեցէք եւ բարձր արարէք զնա յաւիտեան։
                </td>
                <td align="left">
                    Orhnetsek, kovetsek yev partzr ararek zna havidyan:
                </td>
                <td align="left">
                    Bless, praise and exalt him for ever.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Մատուցանէ սարկաւագըն զգինին՝ ասելով.
                </td>
                <td align="left">
                    Madootsane sargavakŭn zkinin՝ aselov.
                </td>
                <td align="left">
                    The deacon offers the wine, saying
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ եւս խաղաղութեան զՏէր աղաչեսցուք։ 
                </td>
                <td align="left">
                    Yev yevs khaghaghootyan zDer aghachestsook: 
                </td>
                <td align="left">
                    Again in peace let us beseech the Lord.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ընկալ, կեցո եւ ողորմեա։
                </td>
                <td align="left">
                    Ŭngal, getso yev voghormya:
                </td>
                <td align="left">
                    Receive us, save us, and have mercy on us.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ քահանայն խաչակնքէ ի վերայ գինւոյն՝ ասելով.
                </td>
                <td align="left">
                    Yev kahanayn khachagnke i vera kinvooyn՝ aselov.
                </td>
                <td align="left">
                    And the priest makes the sign of the cross over the wine, saying
                </td>
            </tr>
            <tr>
                <td align="left">
                    Օրհնութիւն եւ փառք Հօր եւ Որդւոյ եւ Հոգւոյն Սրբոյ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Orhnootyoon yev paṙk Hor yev Vortvo yev Hokvooyn Srpo, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Blessing and glory to the Father and to the Son and to the Holy Spirit, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ քահանայն արկանէ զգինին խաչանիշ ի սկիհն՝ ասելով.
                </td>
                <td align="left">
                    Yev kahanayn argane zkinin khachanish i sgihn՝ aselov.
                </td>
                <td align="left">
                    Then taking the wine, the priest introduces it crosswise into the chalice, saying
                </td>
            </tr>
            <tr>
                <td align="left">
                    Յաղագս յիշատակի փրկագործ տնօրէնութեան Տեառն Աստուծոյ եւ փրկչին մերոյ Յիսուսի Քրիստոսի։
                </td>
                <td align="left">
                    Haghaks hishadagi prgakordz dnorenootyan Dyaṙn Asdoodzo yev prgchin mero Hisoosi Krisdosi:
                </td>
                <td align="left">
                    In remembrance of the redeeming economy of our Lord God and Savior Jesus Christ,
                </td>
            </tr>
            <tr>
                <td align="left">
                    Որ ի կողահոս արեան աղբերէն նորոգեցան արարածք եւ անմահացան։
                </td>
                <td align="left">
                    Vor i goghahos aryan aghperen noroketsan araradzk yev anmahatsan:
                </td>
                <td align="left">
                    Through the fountain of whose blood flowing from his side all creatures have been renewed and made immortal.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Օրհնեցէք, գովեցէք եւ բարձր արարէք զնա յաւիտեան։
                </td>
                <td align="left">
                    Orhnetsek, kovetsek yev partzr ararek zna havidyan:
                </td>
                <td align="left">
                    Bless, praise and exalt him forever.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ ասասցէ զաղօթս Սրբոյն Յովհաննու Ոսկեբերանի ի վերայ ընծայիցն.
                </td>
                <td align="left">
                    Yev asastse zaghots Srpooyn Hovhannoo Vosgeperani i vera ŭndzayitsn.
                </td>
                <td align="left">
                    And he says the following prayer of St. John Chrysostom.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Տէր Աստուած մեր, որ զերկնաւոր հացդ զտէրն մեր Յիսուս Քրիստոս, զկերակուրդ ամենայն աշխարհի, առաքեցեր փրկիչ եւ կեցուցիչ եւ բարերար՝ օրհնել եւ սրբել զմեզ։ Ինքնին դու Տէր, Ը օրհնեա եւ այժմ զառաջադրութիւնս զայս։
                </td>
                <td align="left">
                    Der Asdvadz mer, vor zergnavor hatst zdern mer Hisoos Krisdos, zgeragoort amenayn ashkharhi, aṙaketser prgich yev getsootsich yev parerar՝ orhnel yev srpel zmez: Inknin too Der, Ŭ orhnya yev ayjhm zaṙachatrootyoons zays:
                </td>
                <td align="left">
                    O Lord our God, who sent our Lord Jesus Christ, the heavenly bread, the food of the whole world, to be savior and redeemer and benefactor, and to bless and to sanctify us; Bless now, Lord, also this presentation and receive this upon your heavenly altar.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ընկալ զսա յերկնային քո սեղանդ։ Յիշեա որպէս բարերար եւ մարդասէր զմատուցողս եւ վասն որոց մատուցանի։ Եւ զմեզ անդատապարտ պահեա ի քահանայագործութիւն աստուածային խորհրդոց քոց։
                </td>
                <td align="left">
                    Ŭngal zsa hergnayin ko seghant: Hishya vorbes parerar yev martaser zmadootsoghs yev vasn vorots madootsani: Yev zmez antadabard bahya i kahanayakordzootyoon asdvadzayin khorhrtots kots:
                </td>
                <td align="left">
                    Be mindful as the beneficent one, and the lover of mankind, both of those who offer it and of those for whom it is offered and keep us without condemnation in the priestly service of your divine mysteries.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Զի սուրբ եւ փառաւոր է ամենապատիւ մեծվայելչութիւն փառացդ Հօր եւ Որդւոյ եւ Հոգւոյդ Սրբոյ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Zi soorp yev paṙavor e amenabadiv medzvayelchootyoon paṙatst Hor yev Vortvo yev Hokvooyt Srpo, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    For holy and glorious is the most honorable majesty of the glory of the Father and of the Son and of the Holy Spirit, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սաղմոս ՂԲ
                </td>
                <td align="left">
                    Saghmos GhP
                </td>
                <td align="left">
                    Psalm 93
                </td>
            </tr>
            <tr>
                <td align="left">
                    Տէր թագաւորեաց վայելչութիւն զգեցաւ, զգեցաւ Տէր զօրութիւն ընդ մէջ իւր էած։
                </td>
                <td align="left">
                    Der takavoryats vayelchootyoon zketsav, zketsav Der zorootyoon ŭnt mech yoor eadz:
                </td>
                <td align="left">
                    The Lord has reigned, he is clothed with majesty; the Lord is clothed, he has girded himself with strength.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Հաստատեաց զաշխարհ զի մի սասանեսցի. պատրաստ է աթոռ քո, ի սկզբանէ յաւիտեանս դու ես։
                </td>
                <td align="left">
                    Hasdadyats zashkharh zi mi sasanestsi. badrasd e atoṙ ko, i sgzpane havidyans too yes:
                </td>
                <td align="left">
                    He established the world so that it could not be moved; your throne has been ready; you are from the beginning to everlasting.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ամբարձան գետք, Տէր, եւ համբարձին գետք զձայս իւրեանց. եւ յարիցեն գետք ի գնացս իւրեանց։
                </td>
                <td align="left">
                    Ampartzan kedk, Der, yev hampartzin kedk ztzays yooryants. yev haritsen kedk i knatss yooryants:
                </td>
                <td align="left">
                    The rivers have lifted up, O Lord, the rivers have lifted up their voices; the rivers shall rise in their courses.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ի ձայնէ ջուրց բազմաց սքանչելի եղեն զբօսանք ծովու։
                </td>
                <td align="left">
                    I tzayne choorts pazmats skancheli yeghen zposank dzovoo:
                </td>
                <td align="left">
                    From the voice of many waters the waves of the sea became wonderful;
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սքանչելի ես դու, Տէր, ի բարձունս. վկայութեանց քոց մեք յոյժ հաւատացաք։
                </td>
                <td align="left">
                    Skancheli yes too, Der, i partzoons. vgayootyants kots mek hooyjh havadatsak:
                </td>
                <td align="left">
                    Lord, you on high are wonderful; We greatly trusted your testimonies.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Տան քում վայելէ սրբութիւն, Տէր, ընդ երկայն աւուրս։
                </td>
                <td align="left">
                    Dan koom vayele srpootyoon, Der, ŭnt yergayn avoors:
                </td>
                <td align="left">
                    Holiness befits your house, O Lord, for length of days.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Փառք Հօր եւ Որդւոյ եւ Հոգւոյն Սրբոյ։
                </td>
                <td align="left">
                    Paṙk Hor yev Vortvo yev Hokvooyn Srpo։
                </td>
                <td align="left">
                    Glory to the Father and to the Son and to the Holy Spirit.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ խաչակնքեսցէ ի վերայ ընծայիցն երիցս՝ ասելով.
                </td>
                <td align="left">
                    Yev khachagnkestse i vera ŭndzayitsn yeritss՝ aselov.
                </td>
                <td align="left">
                    Then he makes the sign of the cross over the gifts, saying three times
                </td>
            </tr>
            <tr>
                <td align="left">
                    Հոգին Սուրբ եկեսցէ ի քեզ, եւ զօրութիւն բարձրելոյն հովանի լիցի ի վերայ քո (Ղկ. Ա.35)։
                </td>
                <td align="left">
                    Hokin Soorp yegestse i kez, yev zorootyoon partzrelooyn hovani litsi i vera ko (Ghg. A.35):
                </td>
                <td align="left">
                    The Holy Spirit will come upon you and the power of the Most High will overshadow you (Lk 1:35).
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն արկանէ խունկ եւ խնկէ զընծայսն՝ ասելով.
                </td>
                <td align="left">
                    Kahanayn argane khoong yev khnge zŭndzaysn՝ aselov.
                </td>
                <td align="left">
                    And the priest adds incense and censes, saying
                </td>
            </tr>
            <tr>
                <td align="left">
                    Խունկ մատուցանեմ առաջի քո, Քրիստոս, բուրումն հոգեւորական։ Ընկա՛լ զսա ի սուրբ, յերկնային եւ յիմանալի քո մատուցարանդ՝ ի հոտ անուշից։
                </td>
                <td align="left">
                    Khoong madootsanem aṙachi ko, Krisdos, pooroomn hokevoragan: Ŭnga՛l zsa i soorp, hergnayin yev himanali ko madootsarant՝ i hod anooshits:
                </td>
                <td align="left">
                    I offer incense before you, Christ, for a spiritual fragrance. Receive it for a sweet-smelling fragrance into your holy, heavenly and intelligible place of offering.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Առաքեա առ մեզ փոխարէն զշնորհս եւ զպարգեւս Հոգւոյդ Սրբոյ. եւ քեզ մատուցանեմք զփառս ընդ Հօր եւ ընդ Հոգւոյդ Սրբոյ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Aṙakya aṙ mez pokharen zshnorhs yev zbarkevs Hokvooyt Srpo. yev kez madootsanemk zpaṙs ŭnt Hor yev ŭnt Hokvooyt Srpo, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Send down on us in return the graces and the gifts of your Holy Spirit. And to you we offer glory with the Father and the Holy Spirit, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Բացցեն զվարագոյրն։ 
                </td>
                <td align="left">
                    Patstsen zvarakooyrn: 
                </td>
                <td align="left">
                    The curtain is opened.
                </td>
            </tr>
            <tr>
                <td align="left">
                    ՃԱՇՈՒ ԺԱՄ
                </td>
                <td align="left">
                    JAShOO JhAM
                </td>
                <td align="left">
                    THE SYNAXIS (MIDDAY OFFICE)
                </td>
            </tr>
            <tr>
                <td align="left">
                    ԽՆԿԱՐԿՈՒՄՆ
                </td>
                <td align="left">
                    KhNGARGOOMN
                </td>
                <td align="left">
                    THE CENSING
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն խնկարկելով իջանէ ի թափօր ի մէջ եկեղեցւոյն՝ հանդերձ սարկաւագօքն։ Եւ եղանակեն շարական թափօրի ըստ պատշաճի աւուրն։ Եւ յաւարտիլն ելանէ ի խորան եւ երկրպագէ Ս. Սեղանոյն։
                </td>
                <td align="left">
                    Kahanayn khngargelov ichane i tapor i mech yegeghetsvooyn՝ hantertz sargavakokn: Yev yeghanagen sharagan tapori ŭsd badshaji avoorn: Yev havardiln yelane i khoran yev yergrbake S. Seghanooyn:
                </td>
                <td align="left">
                    Censing, the priest comes down into the church together with the deacons, and the processional hymn proper to the day is sung. At the end, he ascends to the altar and worships.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Դպիրքն
                </td>
                <td align="left">
                    Tbirkn
                </td>
                <td align="left">
                    The People
                </td>
            </tr>
            <tr>
                <td align="left">
                    Բարեխօսութեամբ մօր քո եւ կուսի, ընկալ զաղաչանս քոց պաշտօնէից։
                </td>
                <td align="left">
                    Parekhosootyamp mor ko yev goosi, ŭngal zaghachans kots bashdoneits:
                </td>
                <td align="left">
                    Through the intercession of your virgin Mother, accept the supplications of your servants, O Christ,
                </td>
            </tr>
            <tr>
                <td align="left">
                    Որ գերագոյն քան զերկինս պայծառացուցեր սուրբ զեկեղեցի արեամբ քով Քրիստոս,
                </td>
                <td align="left">
                    Vor kerakooyn kan zergins baydzaṙatsootser soorp zegeghetsi aryamp kov Krisdos,
                </td>
                <td align="left">
                    Who with your blood have made the holy Church more resplendent than the heavens,
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ ըստ երկնայնոցն կարգեցեր ի սմա զդասս առաքելոց եւ մարգարէից սուրբ վարդապետաց։
                </td>
                <td align="left">
                    Yev ŭsd yergnaynotsn garketser i sma ztass aṙakelots yev markareits soorp vartabedats:
                </td>
                <td align="left">
                    And you have arranged in her the orders of apostles, prophets and holy teachers, to resemble the heavenly hosts.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Այսօր ժողովեալ դասք քահանայից, սարկաւագաց, դպրաց եւ կղերիկոսաց,
                </td>
                <td align="left">
                    Aysor jhoghovyal task kahanayits, sargavakats, tbrats yev ggherigosats,
                </td>
                <td align="left">
                    Today we, classes of priests, deacons, clerks and clergy here assembled,
                </td>
            </tr>
            <tr>
                <td align="left">
                    Խունկ մատուցանեմք առաջի քո, Տէր, յօրինակ ըստ հնումն Զաքարիայ։
                </td>
                <td align="left">
                    Khoong madootsanemk aṙachi ko, Der, horinag ŭsd hnoomn Zakaria։
                </td>
                <td align="left">
                    Offer incense before you, O Lord, as Zachariah did of old.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ընկալ առ ի մէնջ զխնկանուէր մաղթանս, որպէս զպատարագն Աբէլի, զՆոյի եւ զԱբրահամու.
                </td>
                <td align="left">
                    Ŭngal aṙ i mench zkhnganver maghtans, vorbes zbadarakn Apeli, zNooyi yev zAprahamoo.
                </td>
                <td align="left">
                    Accept from us our prayers with offerings of incense, like the sacrifice of Abel, of Noah and of Abraham.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Բարեխօսութեամբ վերին քո զօրացդ, միշտ անշարժ պահեա զաթոռ Հայկազնեայս։
                </td>
                <td align="left">
                    Parekhosootyamp verin ko zoratst, mishd ansharjh bahya zatoṙ Haygaznyas:
                </td>
                <td align="left">
                     Through the intercession of your supernal hosts maintain ever unshaken the throne of Armenians.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սարկաւագն
                </td>
                <td align="left">
                    Sargavakn
                </td>
                <td align="left">
                    The Deacon
                </td>
            </tr>
            <tr>
                <td align="left">
                    Օրհնեա, տէր։
                </td>
                <td align="left">
                    Orhnya, der:
                </td>
                <td align="left">
                    Bless, Lord.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Օրհնեալ թագաւորութիւնն Հօր եւ Որդւոյ եւ Հոգւոյն Սրբոյ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Orhnyal takavorootyoonn Hor yev Vortvo yev Hokvooyn Srpo, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Blessed is the kingdom of the Father and of the Son and of the Holy Spirit, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ ասասցեն Ժամամուտ ըստ պատշաճի աւուրն։
                </td>
                <td align="left">
                    Yev asastsen Jhamamood ŭsd badshaji avoorn:
                </td>
                <td align="left">
                    And the choir sings the Introit [zhamamood] proper to the day.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Յաւուրս կիւրակէից՝
                </td>
                <td align="left">
                    Havoors gyoorageits՝
                </td>
                <td align="left">
                    On Sundays
                </td>
            </tr>
            <tr>
                <td align="left">
                    Միածին Որդի եւ Բանդ Աստուած եւ անմահ էութիւն, որ յանձն առեր մարմնանալ ի սրբուհւոյ Աստուածածնէն եւ ի միշտ Կուսէն։ 
                </td>
                <td align="left">
                    Miadzin Vorti yev Pant Asdvadz yev anmah eootyoon, vor hantzn aṙer marmnanal i srpoohvo Asdvadzadznen yev i mishd Goosen: 
                </td>
                <td align="left">
                    Only-begotten Son and Word of God and Being immortal, who deigned to take body through the holy Mother of God and Ever-Virgin.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Անփոփոխելիդ մարդ եղեալ, խաչեցար Քրիստոս Աստուած մեր, մահուամբ զմահ կոխեցեր։ 
                </td>
                <td align="left">
                    Anpopokhelit mart yeghyal, khachetsar Krisdos Asdvadz mer, mahvamp zmah gokhetser: 
                </td>
                <td align="left">
                    You, unchangeable, became man and you were crucified, O Christ our God, and you trampled down death by death.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Մինդ ի Սրբոյ Երրորդութենէն, փառաւորակից ընդ Հօր եւ Սրբոյ Հոգւոյն. կեցո՛ զմեզ։
                </td>
                <td align="left">
                    Mint i Srpo Yerrortootenen, paṙavoragits ŭnt Hor yev Srpo Hokvooyn. getso՛ zmez:
                </td>
                <td align="left">
                    You, one of the Holy Trinity, equal in glory with the Father and the Holy Spirit, save us.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սարկաւագն
                </td>
                <td align="left">
                    Sargavakn
                </td>
                <td align="left">
                    The Deacon
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ եւս խաղաղութեան զՏէր աղաչեսցուք։
                </td>
                <td align="left">
                    Yev yevs khaghaghootyan zDer aghachestsook:
                </td>
                <td align="left">
                    Again in peace let us beseech the Lord.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Ընկալ, կեցո եւ ողորմեա։
                </td>
                <td align="left">
                    Ŭngal, getso yev voghormya:
                </td>
                <td align="left">
                    Receive us, save us, and have mercy on us.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Օրհնեա, տէր։
                </td>
                <td align="left">
                    Orhnya, der:
                </td>
                <td align="left">
                    Bless, Lord.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Օրհնութիւն եւ փառք Հօր եւ Որդւոյ եւ Հոգւոյն Սրբոյ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Orhnootyoon yev paṙk Hor yev Vortvo yev Hokvooyn Srpo, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    Blessing and glory to the Father and to the Son and to the holy Spirit, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    ♰ Խաղաղութիւն ամենեցուն։
                </td>
                <td align="left">
                    ♰ Khaghaghootyoon amenetsoon:
                </td>
                <td align="left">
                    ♰ Peace unto all.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Դպիրքն
                </td>
                <td align="left">
                    Tbirkn
                </td>
                <td align="left">
                    The People
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ ընդ հոգւոյդ քում։
                </td>
                <td align="left">
                    Yev ŭnt hokvooyt koom:
                </td>
                <td align="left">
                    And with your spirit.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սարկաւագն
                </td>
                <td align="left">
                    Sargavakn
                </td>
                <td align="left">
                    The Deacon
                </td>
            </tr>
            <tr>
                <td align="left">
                    Աստուծոյ երկիրպագեսցուք։
                </td>
                <td align="left">
                    Asdoodzo yergirbakestsook:
                </td>
                <td align="left">
                    Let us bow down to God.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Դպիրքն
                </td>
                <td align="left">
                    Tbirkn
                </td>
                <td align="left">
                    The People
                </td>
            </tr>
            <tr>
                <td align="left">
                    Առաջի քո Տէր։
                </td>
                <td align="left">
                    Aṙachi ko Der:
                </td>
                <td align="left">
                    Before you, O Lord.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Տէր Աստուած մեր, որոյ կարողութիւնդ անքնին է եւ փառքդ անհասանելի, որոյ ողորմութիւնդ անչափ է, եւ գթութիւնդ անբաւ, դու ըստ առատ մարդասիրութեանդ քում նայեաց ի ժողովուրդս քո եւ ի տաճարս այս սուրբ։ Եւ արա ընդ մեզ եւ ընդ աղօթակիցս մեր առատապէս զողորմութիւն քո եւ զգթութիւն։ Զի քեզ վայելէ փառք, իշխանութիւն եւ պատիւ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Der Asdvadz mer, voro garoghootyoont anknin e yev paṙkt anhasaneli, voro voghormootyoont anchap e, yev ktootyoont anpav, too ŭsd aṙad martasirootyant koom nayyats i jhoghovoorts ko yev i dajars ays soorp: Yev ara ŭnt mez yev ŭnt aghotagitss mer aṙadabes zoghormootyoon ko yev zktootyoon: Zi kez vayele paṙk, ishkhanootyoon yev badiv, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    O Lord our God, whose power is inscrutable and whose glory incomprehensible, whose mercy is beyond measure and compassion infinite, according to your abundant love of mankind, look down upon this your people and upon this holy temple and make abundant your mercy and your compassion to us and to those who pray with us. For to you is befitting glory, dominion and honor, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ ասասցեն զՃաշու սաղմոսն եւ զշարականն ըստ պատշաճի աւուրն։ 
                </td>
                <td align="left">
                    Yev asastsen zJashoo saghmosn yev zsharagann ŭsd badshaji avoorn: 
                </td>
                <td align="left">
                    And the choir will chant the Midday Psalm  and the Midday Chant proper to the day.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Տէր Աստուած մեր կեցո զժողովուրդս քո եւ օրհնեա զժառանգութիւնս քո. զլրումն եկեղեցւոյ քո պահեա։ Սրբեա զսոսա որք ողջունեցին սիրով զվայելչութիւն տան քո։ Դու զմեզ փառաւորեա Աստուածային զօրութեամբ քով, եւ մի թողուր զյուսացեալսս ի քեզ։ Զի քո է կարողութիւն եւ զօրութիւն եւ փառք յաւիտեանս։ Ամէն։
                </td>
                <td align="left">
                    Der Asdvadz mer getso zjhoghovoorts ko yev orhnya zjhaṙankootyoons ko. zlroomn yegeghetsvo ko bahya: Srpya zsosa vork voghchoonetsin sirov zvayelchootyoon dan ko: Too zmez paṙavorya Asdvadzayin zorootyamp kov, yev mi toghoor zhoosatsyalss i kez: Zi ko e garoghootyoon yev zorootyoon yev paṙk havidyans: Amen:
                </td>
                <td align="left">
                    Lord our God, save your people and bless your inheritance, preserve the fullness of your Church. Sanctify those who have come to greet in love the beauty of your house. Glorify us by your divine power and forsake not us who have put our trust in you. For yours is the might and the power and the glory unto the ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    ♰ Խաղաղութիւն ամենեցուն
                </td>
                <td align="left">
                    ♰ Khaghaghootyoon amenetsoon
                </td>
                <td align="left">
                    ♰ Peace unto all.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Որ հասարակաց զայս եւ միաձայն մեզ ամենեցուն ուսուցեր աղօթել, եւ զերկուց եւ զերից միաձայնելոց յանուն քո զխնդրուածս պարգեւել խոստացար, դու եւ այժմ զծառայից քոց զխնդըրուածս առ ի յօգուտն կատարեա, շնորհելով մեզ յայսմ յաւիտենիս զգիտութիւն քումդ ճըշմարտութեան եւ ի հանդերձեալն զկեանսն յաւիտենականս պարգեւելով։ Զի բարերար եւ մարդասէր ես Աստուած. եւ քեզ վայելէ փառք, իշխանութիւն եւ պատիւ, այժմ եւ միշտ եւ յաւիտեանս յաւիտենից։ Ամէն։
                </td>
                <td align="left">
                    Vor hasaragats zays yev miatzayn mez amenetsoon oosootser aghotel, yev zergoots yev zerits miatzaynelots hanoon ko zkhntrvadzs barkevel khosdatsar, too yev ayjhm zdzaṙayits kots zkhntŭrvadzs aṙ i hokoodn gadarya, shnorhelov mez haysm havidenis zkidootyoon koomt jŭshmardootyan yev i hantertzyaln zgyansn havidenagans barkevelov: Zi parerar yev martaser yes Asdvadz. yev kez vayele paṙk, ishkhanootyoon yev badiv, ayjhm yev mishd yev havidyans havidenits: Amen:
                </td>
                <td align="left">
                    You who have taught us all to pray in common and with one accord and have promised to grant the requests of two or three agreeing together in your name, fulfil now the petitions of your servants as may be expedient for them, granting us in this world knowledge of your truth and in the world to come life everlasting. For you are God beneficent and you love mankind and to you is befitting glory, dominion and honor, now and always and unto the ages of ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    THE GOSPEL PROCESSION
                </td>
                <td align="left">
                    THE GOSPEL PROCESSION
                </td>
                <td align="left">
                    THE GOSPEL PROCESSION
                </td>
            </tr>
            <tr>
                <td align="left">
                    The elevation of the Gospel book and the procession with it around the altar expresses our belief that the Gospel is the Word of God. The Gospel’s authority is so vast that in reading it, we encounter not only Christ’s words, but Christ the Lord himself. To him we sing the ancient Christian hymn of the Three Holies, Soorp Asdvadz, proclaiming the one who rose from the dead to be “Holy God, holy and mighty, holy and immortal.”
                </td>
                <td align="left">
                    The elevation of the Gospel book and the procession with it around the altar expresses our belief that the Gospel is the Word of God. The Gospel’s authority is so vast that in reading it, we encounter not only Christ’s words, but Christ the Lord himself. To him we sing the ancient Christian hymn of the Three Holies, Soorp Asdvadz, proclaiming the one who rose from the dead to be “Holy God, holy and mighty, holy and immortal.”
                </td>
                <td align="left">
                    The elevation of the Gospel book and the procession with it around the altar expresses our belief that the Gospel is the Word of God. The Gospel’s authority is so vast that in reading it, we encounter not only Christ’s words, but Christ the Lord himself. To him we sing the ancient Christian hymn of the Three Holies, Soorp Asdvadz, proclaiming the one who rose from the dead to be “Holy God, holy and mighty, holy and immortal.”
                </td>
            </tr>
            <tr>
                <td align="left">
                    After Soorp Asdvadz the deacon leads the people in a litany of prayers “for peace for the whole world and stability of the holy church,” and for various categories of people, living and deceased. The choir and people appeal to God after each petition saying, “Lord have mercy.”
                </td>
                <td align="left">
                    After Soorp Asdvadz the deacon leads the people in a litany of prayers “for peace for the whole world and stability of the holy church,” and for various categories of people, living and deceased. The choir and people appeal to God after each petition saying, “Lord have mercy.”
                </td>
                <td align="left">
                    After Soorp Asdvadz the deacon leads the people in a litany of prayers “for peace for the whole world and stability of the holy church,” and for various categories of people, living and deceased. The choir and people appeal to God after each petition saying, “Lord have mercy.”
                </td>
            </tr>
            <tr>
                <td align="left">
                    Քահանայն
                </td>
                <td align="left">
                    Kahanayn
                </td>
                <td align="left">
                    The Priest
                </td>
            </tr>
            <tr>
                <td align="left">
                    Տէր Աստուած մեր, որ կարգեցեր յերկինս զդասս եւ զզինուորութիւնս հրեշտակաց եւ հրեշտակապետաց ի սպասաւորութիւն փառաց քոց, արա այժմ ընդ մուտս մեր մտանել եւ սրբոց հրեշտակաց, եւ լինել պաշտօնակից մեզ եւ փառաբանակից քում բարերարութեանդ։
                </td>
                <td align="left">
                    Der Asdvadz mer, vor garketser hergins ztass yev zzinvorootyoons hreshdagats yev hreshdagabedats i sbasavorootyoon paṙats kots, ara ayjhm ŭnt moods mer mdanel yev srpots hreshdagats, yev linel bashdonagits mez yev paṙapanagits koom parerarootyant:
                </td>
                <td align="left">
                    Lord our God, you, who have established in the heavens the orders and the hosts of angels and archangels for the ministry of your glory, make now the holy angels also enter with our entrance and serve with us and glorify with us your goodness
                </td>
            </tr>
            <tr>
                <td align="left">
                    Զի քո է կարողութիւն եւ զօրութիւն եւ փառք յաւիտեանս։ Ամէն։
                </td>
                <td align="left">
                    Zi ko e garoghootyoon yev zorootyoon yev paṙk havidyans: Amen:
                </td>
                <td align="left">
                    For yours is might and power and glory unto the ages. Amen.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Սարկաւագն
                </td>
                <td align="left">
                    Sargavakn
                </td>
                <td align="left">
                    The Deacon
                </td>
            </tr>
            <tr>
                <td align="left">
                    Պռօսխումէ։
                </td>
                <td align="left">
                    Bṙoskhoome:
                </td>
                <td align="left">
                    Be attentive.
                </td>
            </tr>
            <tr>
                <td align="left">
                    Եւ սարկաւագն բարձրացուցեալ զԱւետարանն սուրբ դառնայ ի շուրջ խորանոյն, 
                </td>
                <td align="left">
                    Yev sargavakn partzratsootsyal zAvedarann soorp taṙna i shoorch khoranooyn, 
                </td>
                <td align="left">
                    One of the deacons, elevating the holy Gospel, goes around the altar.
                </td>
            </tr>
        </table>
        <br/><br/>
        <i>Document generated by SQLiteStudio v3.2.1 on Tue Dec 14 20:44:03 2021</i>
    </body>
</html>
`;

export default function App() {
  const { width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <HTML source={{html}} contentWidth={width} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    marginHorizontal: 10,
  },
});