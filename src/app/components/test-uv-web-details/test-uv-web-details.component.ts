import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { TestUvWebService } from 'src/app/services/test-uv-web.service';

@Component({
  selector: 'app-test-uv-web-details',
  templateUrl: './test-uv-web-details.component.html',
  styleUrls: ['./test-uv-web-details.component.css'],
})
export class TestUvWebDetailsComponent implements OnInit {
  @Input()
  test: Test = new Test();
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTest: Test = {
    appPaterno: '',
    appMaterno: '',
    nombre: '',
    persuasivoM: 0,
    persuasivoL: 0,
    gentilM: 0,
    gentilL: 0,
    humildeM: 0,
    humildeL: 0,
    originalM: 0,
    originalL: 0,

    fuerzavoluntadM: 0,
    fuerzavoluntadL: 0,
    menteabiertaM: 0,
    menteabiertaL: 0,
    complacienteM: 0,
    complacienteL: 0,
    animosoM: 0,
    animosoL: 0,

    obedienteM: 0,
    obedienteL: 0,
    quisquillosoM: 0,
    quisquillosoL: 0,
    inconquistableM: 0,
    inconquistableL: 0,
    juguetonM: 0,
    juguetonL: 0,

    aventureroM: 0,
    aventureroL: 0,
    receptivoM: 0,
    receptivoL: 0,
    cordialM: 0,
    cordialL: 0,
    moderadoM: 0,
    moderadoL: 0,

    agresivoM: 0,
    agresivoL: 0,
    almafiestaM: 0,
    almafiestaL: 0,
    comodinoM: 0,
    comodinoL: 0,
    temerosoM: 0,
    temerosoL: 0,

    confiadoM: 0,
    confiadoL: 0,
    simpatizadorM: 0,
    simpatizadorL: 0,
    toleranteM: 0,
    toleranteL: 0,
    afirmativoM: 0,
    afirmativoL: 0,

    respetuosoM: 0,
    respetuosoL: 0,
    emprendedorM: 0,
    emprendedorL: 0,
    optimistaM: 0,
    optimistaL: 0,
    servicialM: 0,
    servicialL: 0,

    indulgenteM: 0,
    indulgenteL: 0,
    estetaM: 0,
    estetaL: 0,
    vigorosoM: 0,
    vigorosoL: 0,
    sociableM: 0,
    sociableL: 0,

    agradableM: 0,
    agradableL: 0,
    temerosodiosM: 0,
    temerosodiosL: 0,
    tenazM: 0,
    tenazL: 0,
    atractivoM: 0,
    atractivoL: 0,

    ecuanimeM: 0,
    ecuanimeL: 0,
    precisoM: 0,
    precisoL: 0,
    nerviosoM: 0,
    nerviosoL: 0,
    jovialM: 0,
    jovialL: 0,

    valienteM: 0,
    valienteL: 0,
    inspiradorM: 0,
    inspiradorL: 0,
    sumisoM: 0,
    sumisoL: 0,
    timidoM: 0,
    timidoL: 0,

    parlanchinM: 0,
    parlanchinL: 0,
    controladoM: 0,
    controladoL: 0,
    convencionalM: 0,
    convencionalL: 0,
    decisivoM: 0,
    decisivoL: 0,

    cautelosoM: 0,
    cautelosoL: 0,
    determinadoM: 0,
    determinadoL: 0,
    convincenteM: 0,
    convincenteL: 0,
    bonachonM: 0,
    bonachonL: 0,

    disciplinadoM: 0,
    disciplinadoL: 0,
    generosoM: 0,
    generosoL: 0,
    ani_mosoM: 0,
    ani_mosoL: 0,
    persistenteM: 0,
    persistenteL: 0,

    adaptableM: 0,
    adaptableL: 0,
    disputadorM: 0,
    disputadorL: 0,
    indiferenteM: 0,
    indiferenteL: 0,
    sangrelivianaM: 0,
    sangrelivianaL: 0,

    cohibidoM: 0,
    cohibidoL: 0,
    exactoM: 0,
    exactoL: 0,
    francoM: 0,
    francoL: 0,
    buencompaneroM: 0,
    buencompaneroL: 0,

    docilM: 0,
    docilL: 0,
    atrevidoM: 0,
    atrevidoL: 0,
    lealM: 0,
    lealL: 0,
    encantadorM: 0,
    encantadorL: 0,

    competitivoM: 0,
    competitivoL: 0,
    alegreM: 0,
    alegreL: 0,
    consideradoM: 0,
    consideradoL: 0,
    armoniosoM: 0,
    armoniosoL: 0,

    amigueroM: 0,
    amigueroL: 0,
    pacienteM: 0,
    pacienteL: 0,
    confianzamismoM: 0,
    confianzamismoL: 0,
    mesuradohablarM: 0,
    mesuradohablarL: 0,

    diplomaticoM: 0,
    diplomaticoL: 0,
    audazM: 0,
    audazL: 0,
    refinadoM: 0,
    refinadoL: 0,
    satisfechoM: 0,
    satisfechoL: 0,

    dispuestoM: 0,
    dispuestoL: 0,
    deseosoM: 0,
    deseosoL: 0,
    consecuenteM: 0,
    consecuenteL: 0,
    entusiastaM: 0,
    entusiastaL: 0,

    admirableM: 0,
    admirableL: 0,
    bondadosoM: 0,
    bondadosoL: 0,
    resignadoM: 0,
    resignadoL: 0,
    caracterfirmeM: 0,
    caracterfirmeL: 0,

    conformeM: 0,
    conformeL: 0,
    confiableM: 0,
    confiableL: 0,
    pacificoM: 0,
    pacificoL: 0,
    positivoM: 0,
    positivoL: 0,

    inquietoM: 0,
    inquietoL: 0,
    popularM: 0,
    popularL: 0,
    buenvecinoM: 0,
    buenvecinoL: 0,
    devotoM: 0,
    devotoL: 0,

    FinalT: 0,
    FinalM: 0,
    FinalL: 0,

    FinalResult: 0,
    Result: 0,
    message: '',
  };

  arrMD: Array<number> = [
    1, 5, 10, 20, 30, 40, 50, 60, 65, 75, 84, 87, 90, 93, 95, 97, 97, 98, 98,
    98, 99,
  ];

  arrMI: Array<number> = [
    4, 10, 25, 40, 55, 70, 82, 90, 95, 96, 97, 97, 97, 97, 97, 97, 97, 99,
  ];

  arrMS: Array<number> = [
    5, 10, 16, 30, 40, 55, 63, 75, 84, 90, 95, 96, 97, 97, 97, 97, 98, 98, 98,
    99,
  ];

  arrMC: Array<number> = [
    1, 5, 16, 30, 55, 70, 84, 93, 95, 97, 97, 97, 98, 98, 98, 99,
  ];

  arrLD: Array<number> = [
    99, 95, 87, 80, 65, 55, 50, 35, 30, 20, 18, 15, 10, 6, 5, 4, 3, 2, 2, 2, 2,
    1,
  ];

  arrLI: Array<number> = [
    99, 95, 87, 75, 55, 40, 25, 16, 10, 5, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1,
  ];

  arrLS: Array<number> = [
    99, 97, 95, 87, 80, 65, 55, 35, 28, 18, 10, 5, 4, 3, 3, 3, 2, 2, 2, 1,
  ];

  arrLC: Array<number> = [
    99, 97, 95, 90, 84, 70, 55, 40, 38, 23, 10, 5, 4, 3, 2, 2, 1,
  ];

  arrtempTC: number[][] = [
    [-21, 1],
    [-20, 2],
    [-19, 2],
    [-18, 2],
    [-17, 2],
    [-16, 2],
    [-15, 2],
    [-14, 2],
    [-13, 4],
    [-12, 5],
    [-11, 5],
    [-10, 9],
    [-9, 13],
    [-8, 15],
    [-7, 16],
    [-6, 20],
    [-5, 25],
    [-4, 29],
    [-3, 35],
    [-2, 40],
    [-1, 45],
    [0, 50],
    [1, 55],
    [2, 60],
    [3, 65],
    [4, 67],
    [5, 70],
    [6, 75],
    [7, 80],
    [8, 84],
    [9, 85],
    [10, 90],
    [11, 91],
    [12, 94],
    [13, 95],
    [14, 96],
    [15, 97],
    [16, 97],
    [17, 98],
    [18, 98],
    [19, 98],
    [20, 99],
  ];

  arrTD = {
    '-21': 1,
    '-20': 2,
    '-19': 2,
    '-18': 2,
    '-17': 2,
    '-16': 2,
    '-15': 2,
    '-14': 2,
    '-13': 4,
    '-12': 5,
    '-11': 5,
    '-10': 9,
    '-9': 13,
    '-8': 15,
    '-7': 16,
    '-6': 20,
    '-5': 25,
    '-4': 29,
    '-3': 35,
    '-2': 40,
    '-1': 45,
    '0': 50,
    '1': 55,
    '2': 60,
    '3': 65,
    '4': 67,
    '5': 70,
    '6': 75,
    '7': 80,
    '8': 84,
    '9': 85,
    '10': 90,
    '11': 91,
    '12': 94,
    '13': 95,
    '14': 96,
    '15': 97,
    '16': 97,
    '17': 98,
    '18': 98,
    '19': 98,
    '20': 99,
  };

  arrTI = {
    '-19': 1,
    '-18': 2,
    '-17': 2,
    '-16': 2,
    '-15': 2,
    '-14': 2,
    '-13': 2,
    '-12': 2,
    '-11': 2,
    '-10': 3,
    '-9': 4,
    '-8': 5,
    '-7': 6,
    '-6': 10,
    '-5': 16,
    '-4': 20,
    '-3': 29,
    '-2': 35,
    '-1': 45,
    '0': 55,
    '1': 60,
    '2': 70,
    '3': 75,
    '4': 85,
    '5': 90,
    '6': 95,
    '7': 96,
    '8': 97,
    '9': 97,
    '10': 98,
    '11': 98,
    '12': 98,
    '13': 98,
    '14': 98,
    '15': 98,
    '16': 98,
    '17': 99,
  };

  arrTS = {
    '-19': 1,
    '-18': 2,
    '-17': 2,
    '-16': 2,
    '-15': 2,
    '-14': 2,
    '-13': 2,
    '-12': 3,
    '-11': 4,
    '-10': 5,
    '-9': 8,
    '-8': 10,
    '-7': 15,
    '-6': 20,
    '-5': 25,
    '-4': 30,
    '-3': 35,
    '-2': 40,
    '-1': 50,
    '0': 57,
    '1': 60,
    '2': 70,
    '3': 75,
    '4': 80,
    '5': 84,
    '6': 87,
    '7': 91,
    '8': 94,
    '9': 96,
    '10': 97,
    '11': 97,
    '12': 98,
    '13': 98,
    '14': 98,
    '15': 98,
    '16': 98,
    '17': 98,
    '18': 98,
    '19': 99,
  };

  arrTC = {
    '-16': 1,
    '-15': 2,
    '-14': 2,
    '-13': 2,
    '-12': 2,
    '-11': 3,
    '-10': 4,
    '-9': 6,
    '-8': 9,
    '-7': 13,
    '-6': 20,
    '-5': 25,
    '-4': 30,
    '-3': 35,
    '-2': 55,
    '-1': 60,
    '0': 70,
    '1': 75,
    '2': 84,
    '3': 90,
    '4': 95,
    '5': 96,
    '6': 97,
    '7': 97,
    '8': 98,
    '9': 98,
    '10': 98,
    '11': 98,
    '12': 98,
    '13': 98,
    '14': 98,
    '15': 99,
  };

  arrInter = {
    '1': 'Persuasivo: quien tiene la capacidad de convencer a otros y hacerles creer en algo.',
    '2': 'Gentil: quien actúa con cortesía, soltura y urbanidad. Amable, gallardo y con gracia.',
    '3': 'Humilde: sencillo, que no alardea (no interpretar como humildad cristiana).',
    '4': 'Original: quien no es una imitación de otro, singular.',
    '5': 'Agresivo: demuestra empuje e iniciativa de manera positiva, no propenso a ofender.',
    '6': 'Alma de la fiesta: el más popular, quien genera mayor atracción en el grupo.',
    '7': 'Comodino: amante de la comodidad, busca caminos fáciles.',
    '8': 'Temeroso: tímido, cobarde, aprensivo.',
    '9': 'Agradable: quien agrada, complace y es apreciado por los demás.',
    '10': 'Temeroso de Dios: reconoce el poder de Dios sobre todas las cosas, religioso.',
    '11': 'Tenaz: obstinado y testarudo, con inquebrantable fuerza de voluntad para alcanzar un objetivo.',
    '12': 'Atractivo: posee encanto y una cualidad que atrae la voluntad de los demás.',
    '13': 'Cauteloso: reservado, actúa con cuidado y precaución.',
    '14': 'Determinado: atrevido, toma resoluciones con precisión y decisión.',
    '15': 'Convincente: sabe persuadir y hacer que otros reconozcan una idea o cambien de opinión.',
    '25': 'Fuerza de voluntad: determinación inquebrantable para lograr algo, firmeza.',
    '26': 'Mente abierta: capacidad para escuchar y aceptar diferentes puntos de vista.',
    '27': 'Complaciente: procura ser agradable, servicial, conciliador y deferente.',
    '28': 'Animoso: demuestra valor, energía, voluntad, intención y esfuerzo en la lucha o el trabajo.',
    '29': 'Confiado: presumido y vanidoso, crédulo y sencillo (no quien confía en sí mismo).',
    '30': 'Simpatizador: muestra inclinación o afecto natural hacia otras personas.',
    '31': 'Tolerante: respeta opiniones y comportamientos distintos sin necesidad de compartirlos.',
    '32': 'Afirmativo: responde generalmente de manera positiva (no implica ratificación de lo dicho).',
    '33': 'Ecuánime: calmado, sereno, imparcial, inalterable y prudente. Mantiene un estado de ánimo constante.',
    '34': 'Preciso: puntual, exacto y claro en sus acciones y palabras.',
    '35': 'Nervioso: ansioso, con falta de seguridad.',
    '36': 'Jovial: apacible, alegre y festivo.',
    '37': 'Disciplinado: habituado a la obediencia y al cumplimiento de reglas.',
    '38': 'Generoso: actúa con magnanimidad, nobleza y disposición a dar.',
    '39': 'Animoso: demuestra valor, energía, voluntad e intención en el trabajo o la lucha.',
    '40': 'Persistente: supera obstáculos con constancia y perseverancia, mantiene sus propósitos.',
    '41': 'Competitivo: contiende con otros por superación, perfección o posesión de algo.',
    '42': 'Alegre: lleno de entusiasmo y capaz de contagiarlo a otros.',
    '43': 'Considerado: reflexivo y respetuoso con los demás.',
    '44': 'Armonioso: mantiene buenas relaciones sin conflictos.',
    '45': 'Admirable: digno de admiración, notable.',
    '46': 'Bondadoso: de gran calidad humana, compasivo.',
    '47': 'Resignado: se conforma y se somete a la voluntad de otro.',
    '48': 'Carácter firme: mantiene su punto de vista o estilo sin cambios fáciles.',
    '49': 'Obediente: sigue indicaciones sin añadir creatividad propia, sumiso y subordinado.',
    '50': 'Quisquilloso: se ofende fácilmente, meticuloso en el trato.',
    '51': 'Inconquistable: no se deja persuadir fácilmente, resistente a ruegos o detalles.',
    '52': 'Juguetón: con buen sentido del humor, aficionado a las bromas.',
    '53': 'Respetuoso: muestra reverencia, consideración y cortesía hacia los demás.',
    '54': 'Emprendedor: imaginativo y resolutivo, enfrenta situaciones difíciles con decisión.',
    '55': 'Optimista: ve y juzga las cosas bajo su aspecto más favorable.',
    '56': 'Servicial: atento y dispuesto a ayudar, amable y colaborador.',
    '57': 'Valiente: manifiesta coraje y decisión, fuerte y enérgico.',
    '58': 'Inspirador: anima y motiva a los demás, infunde entusiasmo.',
    '59': 'Sumiso: se sujeta a la voluntad de otro, obediente y dócil.',
    '60': 'Tímido: callado, no busca sobresalir.',
    '61': 'Adaptable: se ajusta fácilmente a condiciones nuevas o diferentes.',
    '62': 'Disputador: propenso a argumentar y debatir, discutidor.',
    '63': 'Indiferente: no muestra interés o preferencia por algo.',
    '64': '"Sangre liviana": cae bien a todos, persona simpática y agradable.',
    '65': 'Amiguero: busca y disfruta la compañía de otros, sociable.',
    '66': 'Paciente: soporta y espera con calma el momento oportuno.',
    '67': 'Confianza en sí mismo: seguro de sus capacidades y recursos, autosuficiente.',
    '68': 'Mesurado para hablar: habla con prudencia y lo necesario.',
    '69': 'Conforme: satisfecho con lo que tiene, acepta la opinión de otros.',
    '70': 'Confiable: inspira confianza en los demás.',
    '71': 'Pacífico: tranquilo, amante de la paz.',
    '72': 'Positivo: optimista, enfocado en lo favorable.',
    '73': 'Aventurero: busca y disfruta nuevas experiencias.',
    '74': 'Receptivo: con facilidad para captar y asimilar información.',
    '75': 'Cordial: amable, afectuoso y cariñoso.',
    '76': 'Moderado: equilibra sus acciones y evita extremos.',
    '77': 'Indulgente: perdona fácilmente, conciliador.',
    '78': 'Esteta: aprecia y cultiva la belleza, busca la elegancia.',
    '79': 'Vigoroso: robusto y fuerte.',
    '80': 'Sociable: disfruta y necesita la compañía de otros.',
    '81': 'Parlanchín: habla mucho, comunicativo.',
    '82': 'Controlado: domina sus emociones y ejerce influencia sobre otros.',
    '83': 'Convencional: se mantiene en lo comúnmente aceptado.',
    '84': 'Decisivo: resuelto y determinado.',
    '85': 'Cohibido: se restringe o controla ante los demás.',
    '86': 'Exacto: justo, preciso, calculador.',
    '87': 'Franco: espontáneo, leal y sincero.',
    '88': 'Buen compañero: sociable, fomenta la armonía.',
    '89': 'Diplomático: trata a las personas con tacto y buen criterio.',
    '90': 'Audaz: atrevido y osado, no insolente.',
    '91': 'Refinado: elegante y distinguido en su manera de ser.',
    '92': 'Satisfecho: contento con lo que tiene.',
    '93': 'Inquieto: busca novedades, versátil y dinámico.',
    '94': 'Popular: genera atracción en su grupo social.',
    '95': 'Buen vecino: cortés y de buen trato con los demás.',
    '96': 'Devoto: fiel y comprometido.',
  };

  MD: any;
  MI: any;
  MS: any;
  MC: any;

  LD: any;
  LI: any;
  LS: any;
  LC: any;

  TotD: any;
  TotI: any;
  TotS: any;
  TotC: any;

  ResultMD: any;
  ResultMI: any;
  ResultMS: any;
  ResultMC: any;

  ResultLD: any;
  ResultLI: any;
  ResultLS: any;
  ResultLC: any;

  ResultTotD: any;
  ResultTotI: any;
  ResultTotS: any;
  ResultTotC: any;

  FinalT: any;
  FinalM: any;
  FinalL: any;

  FinalResult: any;
  Result: any;

  message = '';

  /*
  r1:number[][] = [[0,0,0,0],
                   [0,0,0,0],
                   [0,0,0,0]]  

  r2:number[][] = [[0,0,0,0],
                   [0,0,0,0],
                   [0,0,0,0]]  
*/

  constructor(private testUvWebService: TestUvWebService) {}

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentTest = { ...this.test };

    // 7
    this.MD =
      Number(this.test.agresivoM) +
      Number(this.test.tenazM) +
      Number(this.test.determinadoM) +
      Number(this.test.atrevidoM) +
      Number(this.currentTest.afirmativoM) +
      Number(this.test.persistenteM) +
      Number(this.test.competitivoM) +
      Number(this.test.caracterfirmeM) +
      Number(this.test.inconquistableM) +
      Number(this.test.emprendedorM) +
      Number(this.test.valienteM) +
      Number(this.test.disputadorM) +
      Number(this.test.confianzamismoM) +
      Number(this.test.positivoM);
    Number(this.currentTest.aventureroM) +
      Number(this.test.vigorosoM) +
      Number(this.test.decisivoM) +
      Number(this.test.francoM) +
      Number(this.test.audazM) +
      Number(this.test.inquietoM);
    // 1
    this.MI =
      Number(this.currentTest.persuasivoM) +
      Number(this.test.almafiestaM) +
      Number(this.test.atractivoM) +
      Number(this.test.convincenteM) +
      Number(this.test.encantadorM) +
      Number(this.test.animosoM) +
      Number(this.test.confiadoM) +
      Number(this.test.admirableM) +
      Number(this.test.juguetonM) +
      Number(this.test.optimistaM) +
      Number(this.test.inspiradorM) +
      Number(this.test.sangrelivianaM) +
      Number(this.test.amigueroM) +
      Number(this.test.cordialM) +
      Number(this.test.sociableM) +
      Number(this.test.parlanchinM) +
      Number(this.test.buencompaneroM) +
      Number(this.test.popularM);
    //10
    this.MS =
      Number(this.currentTest.gentilM) +
      Number(this.test.comodinoM) +
      Number(this.test.bonachonM) +
      Number(this.test.lealM) +
      Number(this.test.dispuestoM) +
      Number(this.test.complacienteM) +
      Number(this.test.ecuanimeM) +
      Number(this.test.generosoM) +
      Number(this.test.consideradoM) +
      Number(this.test.bondadosoM) +
      Number(this.test.obedienteM) +
      Number(this.test.servicialM) +
      Number(this.test.pacienteM) +
      Number(this.test.confiableM) +
      Number(this.test.moderadoM) +
      Number(this.test.indulgenteM) +
      Number(this.test.controladoM) +
      Number(this.test.satisfechoM) +
      Number(this.test.buenvecinoM);
    // 2
    this.MC =
      Number(this.test.humildeM) +
      Number(this.test.temerosodiosM) +
      Number(this.test.cautelosoM) +
      Number(this.test.consecuenteM) +
      Number(this.test.menteabiertaM) +
      Number(this.test.precisoM) +
      Number(this.test.disciplinadoM) +
      Number(this.test.respetuosoM) +
      Number(this.test.adaptableM) +
      Number(this.test.mesuradohablarM) +
      Number(this.test.pacificoM) +
      Number(this.test.receptivoM) +
      Number(this.test.exactoM) +
      Number(this.test.diplomaticoM) +
      Number(this.test.devotoM);

    // 4
    this.LD =
      Number(this.currentTest.originalL) +
      Number(this.test.tenazL) +
      Number(this.test.atractivoL) +
      Number(this.test.entusiastaL) +
      Number(this.test.fuerzavoluntadL) +
      Number(this.test.afirmativoL) +
      Number(this.test.nerviosoL) +
      Number(this.test.persistenteL) +
      Number(this.test.competitivoL) +
      Number(this.test.emprendedorM) +
      Number(this.test.caracterfirmeL) +
      Number(this.test.inconquistableL) +
      Number(this.test.emprendedorL) +
      Number(this.test.disputadorL);
    Number(this.test.confianzamismoL) +
      Number(this.test.positivoL) +
      Number(this.test.aventureroL) +
      Number(this.test.vigorosoL) +
      Number(this.test.decisivoL) +
      Number(this.test.francoL) +
      Number(this.test.audazL) +
      Number(this.test.inquietoL);

    // 7
    this.LI =
      Number(this.test.almafiestaL) +
      Number(this.test.atractivoL) +
      Number(this.test.convincenteL) +
      Number(this.test.encantadorL) +
      Number(this.test.animosoL) +
      Number(this.test.jovialL) +
      Number(this.test.ani_mosoL) +
      Number(this.test.alegreL) +
      Number(this.test.juguetonL) +
      Number(this.test.optimistaL) +
      Number(this.test.sangrelivianaL) +
      Number(this.test.amigueroL) +
      Number(this.test.confiableL) +
      Number(this.test.cordialL) +
      Number(this.test.sociableL) +
      Number(this.test.parlanchinL) +
      Number(this.test.buencompaneroL) +
      Number(this.test.refinadoL) +
      Number(this.test.popularL);

    // 5
    this.LS =
      Number(this.test.gentilL) +
      Number(this.test.comodinoL) +
      Number(this.test.agradableL) +
      Number(this.test.complacienteL) +
      Number(this.test.simpatizadorL) +
      Number(this.test.ecuanimeL) +
      Number(this.test.generosoL) +
      Number(this.test.consideradoL) +
      Number(this.test.servicialL) +
      Number(this.test.sumisoL) +
      Number(this.test.indiferenteL) +
      Number(this.test.pacienteL) +
      Number(this.test.conformeL) +
      Number(this.test.moderadoL) +
      Number(this.test.indulgenteL) +
      Number(this.test.controladoL) +
      Number(this.test.cohibidoL) +
      Number(this.test.satisfechoL) +
      Number(this.test.buenvecinoL);

    // 3
    this.LC =
      Number(this.test.humildeL) +
      Number(this.test.temerosoL) +
      Number(this.test.temerosodiosL) +
      Number(this.test.cautelosoL) +
      Number(this.test.docilL) +
      Number(this.test.consecuenteL) +
      Number(this.test.toleranteL) +
      Number(this.test.precisoL) +
      Number(this.test.armoniosoL) +
      Number(this.test.resignadoL) +
      Number(this.test.quisquillosoL) +
      Number(this.test.timidoL) +
      Number(this.test.pacificoL) +
      Number(this.test.estetaL);
    Number(this.test.convencionalL) + Number(this.test.devotoL);

    this.TotD = Number(this.MD) - Number(this.LD);
    this.TotI = Number(this.MI) - Number(this.LI);
    this.TotS = Number(this.MS) - Number(this.LS);
    this.TotC = Number(this.MC) - Number(this.LC);

    this.ResultMD = this.arrMD[this.MD];
    this.ResultMI = this.arrMI[this.MI];
    this.ResultMS = this.arrMS[this.MS];
    this.ResultMC = this.arrMC[this.MC];

    this.ResultLD = this.arrLD[this.LD];
    this.ResultLI = this.arrLI[this.LI];
    this.ResultLS = this.arrLS[this.LS];
    this.ResultLC = this.arrLC[this.LC];

    this.ResultTotD = this.arrTD[this.TotD as number];
    this.ResultTotI = this.arrTI[this.TotI as number];
    this.ResultTotS = this.arrTS[this.TotS as number];
    this.ResultTotC = this.arrTC[this.TotC as number];

    var arrTotalT: Array<number> = [
      this.ResultTotD,
      this.ResultTotI,
      this.ResultTotS,
      this.ResultTotC,
    ];

    var arrTotalM: Array<number> = [
      this.ResultMD,
      this.ResultMI,
      this.ResultMS,
      this.ResultMC,
    ];

    var arrTotalL: Array<number> = [
      this.ResultLD,
      this.ResultLI,
      this.ResultLS,
      this.ResultLC,
    ];

    var maxFinalT = Math.max(...arrTotalT.map((o) => o));
    var maxFinalM = Math.max(...arrTotalM.map((o) => o));
    var maxFinalL = Math.max(...arrTotalL.map((o) => o));

    this.FinalT = maxFinalT;
    this.FinalM = maxFinalM;
    this.FinalL = maxFinalL;

    this.FinalResult = (this.FinalT + this.FinalM + this.FinalL) / 3;
    this.Result = this.FinalResult.toFixed(0);
    this.message = this.arrInter[this.Result as number];
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  updatePublished(status: boolean): void {
    if (this.currentTest.id) {
      this.testUvWebService
        .update(this.currentTest.id, { published: status })
        .then(() => {
          // this.currentTest.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch((err) => console.log(err));
    }
  }

  updateTest(): void {
    const data = {
      title: this.currentTest.appPaterno,
      description: this.currentTest.appMaterno,
    };

    if (this.currentTest.id) {
      this.testUvWebService
        .update(this.currentTest.id, data)
        .then(() => (this.message = 'The test was updated successfully!'))
        .catch((err) => console.log(err));
    }
  }

  deleteTest(): void {
    if (!this.currentTest?.id) return;

    const isConfirmed = window.confirm(
      '¿Estás seguro de que deseas eliminar este test? Esta acción no se puede deshacer.'
    );

    if (isConfirmed) {
      this.testUvWebService
        .delete(this.currentTest.id)
        .then(() => {
          this.refreshList.emit();
          window.alert('El test ha sido eliminado correctamente.');
        })
        .catch((err) => {
          window.alert('Hubo un error al eliminar el test: ' + err.message);
        });
    }
  }
}
