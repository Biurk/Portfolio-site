import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.scss']
})
export class MyCvComponent implements OnInit {

  public diplomaData: any[] = [
    ['2008', 'BAC', 'Lycée Méditerranée'],
    ['2012', 'Licence Maths/info', 'Aix-Marseille Université'],
    ['2015', 'Master Mathématiques', 'Aix-Marseille Université']];
  public diplomaColumns: string[] = ['Année', 'Diplôme', 'Ecole'];
  public bookData: any[] = [
    ['Deep Learning with Python', 'Francois Chollet', 'IA'],
    ['OCA Java SE 8 Programmer I Study Guide Exam 1Z0-808', 'Jeanne Boyarsky - Scott Selikoff', 'Programmation Java'],
    ['Les maths en tête : Algèbre', 'Xavier Gourdon', 'Maths'],
    ['Les maths en tête : Analyse', 'Xavier Gourdon', 'Maths']];
  public bookColumns: string[] = ['Titre', 'Auteur', 'Domaine'];
  public expData: any[] = [
    ['2013', '1 an', 'Professeur de Maths', 'Lycée Méditerranée'],
    ['2015', '1 an', 'Professeur de Maths', 'Collége Le Vieux Chêne'],
    ['2016', '1.5 an', 'Developpeur mobile', 'Freelance'],
    ['2018', '2 ans', 'Ingénieur Logiciel', 'Atos']];
  public expColumns: string[] = ['Début', 'Durée', 'Fonction', 'Entreprise'];
  public certifColumns: string[] = ['Année', 'Nom', 'Vérification'];
  public certifData: any[] = [
    ['2019', 'Oracle Certified Associate, Java SE 8 Programmer', '_Lien de vérification_https://www.youracclaim.com/badges/0dd98f2b-72b2-4663-9054-3416b7e741d6/public_url'],
    ['2020', 'IBM - Machine Learning with Python - Level 1', '_Lien de vérification_https://www.youracclaim.com/badges/97486efe-0bca-4487-a3b1-05a7c1ae897a/public_url'],
    ['2020', 'IBM - Deep Learning Essentials', '_Lien de vérification_https://www.youracclaim.com/badges/3a069bec-3931-4b20-b8c1-261041f7cedb/public_url'],
    ['2020', 'IBM - Deep Learning', '_Lien de vérification_https://www.youracclaim.com/badges/4a3073d4-7f74-45cb-a328-301b37e3f75f/public_url'],
    ['2020', 'IBM - Deep Learning using TensorFlow', '_Lien de vérification_https://www.youracclaim.com/badges/0f5913de-2ff7-4234-8db6-e11e15915e34/public_url'],
    ['2020', 'IBM - Accelerated Deep Learning with GPU', '_Lien de vérification_https://www.youracclaim.com/badges/9136fe6f-d2f5-4271-aad4-03694cd597ca/public_url'],
    ['2020', 'Google - Google Cloud Essentials', '_Lien de vérification_https://google.qwiklabs.com/public_profiles/896353fb-48bb-4eb0-ae76-06dde4596fb3']];
  public skillData: any[] = [
    ['Mathématiques', '5 ans'],
    ['Java', '2 ans'],
    ['Angular', '1 an'],
    ['Python', '1 an'],
    ['Tensorflow', '6 mois'],
    ['Docker', '6 mois'],
    ['Unity 3D', '2 ans'],
    ['Mise en production', '6 mois'],
    ['Anglais', 'Niveau C1']];


  public text1 = `Actuellement en poste d'ingénieur informatique au sein de la société Atos, je désire évoluer dans le métier: ce que ne me permet plus mon poste actuel.`;

  public text2 = `Les mathématiques, les sciences, et l'informatique sont pour moi une véritable passion. Je m'intéresse beaucoup aux nouvelles technologies telles que le Deep learning.
  Au sein d'Atos, je fais parti d'un groupe bénévole à caractère académique, s'interessant aux techniques de l'IA. Ainsi, j'ai eu l'opportunité 
  de produire des documents pédagogiques accompagnant la montée en compétence d'autres colaborateurs dans ce domaine.`;

  public text3 = `Je suis curieux, autodidacte, ingénieux et pérséverant. J'aime les challenges et le travail en équipe n'est pas une difficulté pour moi, bien au contraire.`;

  public text4 = `Je me tiens à votre entière disposition pour tous renseignements complémentaires et un éventuel entretien.`;

  public skillColumns: string[] = ['Compétences/Technologie', 'Années d\'experiences'];

  public panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
    this.diplomaData = this.diplomaData.reverse();
    this.certifData = this.certifData.reverse();
    this.expData = this.expData.reverse();
  }

  public goToLink(url: string) {
    window.open(url, '_blank');
  }

}
