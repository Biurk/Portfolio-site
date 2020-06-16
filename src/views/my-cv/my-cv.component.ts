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
  public diplomaColumns: string[] = ['Année', 'Diplome', 'Ecole'];
  public expData: any[] = [
    ['2013', '1 an', 'Professeur de Maths', 'Lycée Méditerranée'],
    ['2015', '1 an', 'Professeur de Maths', 'Collége Le Vieux Chêne'],
    ['2016', '1.5 an', 'Developpeur mobile', 'Freelance'],
    ['2018', '2 ans', 'Ingénieur Logiciel', 'Atos']];
  public expColumns: string[] = ['Début', 'Durée', 'Fonction', 'Entreprise'];
  public certifColumns: string[] = ['Année', 'Nom', 'verification'];
  public certifData: any[] = [
    ['2019', 'Oracle Certified Associate, Java SE 8 Programmer', '_https://www.youracclaim.com/badges/0dd98f2b-72b2-4663-9054-3416b7e741d6/public_url'],
    ['2020', 'IBM - Machine Learning with Python - Level 1', '_https://www.youracclaim.com/badges/97486efe-0bca-4487-a3b1-05a7c1ae897a/public_url'],
    ['2020', 'IBM - Deep Learning Essentials', '_https://www.youracclaim.com/badges/3a069bec-3931-4b20-b8c1-261041f7cedb/public_url'],
    ['2020', 'IBM - Deep Learning', '_https://www.youracclaim.com/badges/4a3073d4-7f74-45cb-a328-301b37e3f75f/public_url'],
    ['2020', 'IBM - Deep Learning using TensorFlow', '_https://www.youracclaim.com/badges/0f5913de-2ff7-4234-8db6-e11e15915e34/public_url'],
    ['2020', 'IBM - Accelerated Deep Learning with GPU', '_https://www.youracclaim.com/badges/9136fe6f-d2f5-4271-aad4-03694cd597ca/public_url'],
    ['2020', 'Google - Google Cloud Essentials', '_https://google.qwiklabs.com/public_profiles/896353fb-48bb-4eb0-ae76-06dde4596fb3']];
  public skillData: any[] = [
    ['Mathématiques', '10', '5 ans'],
    ['Java', '9', '2 ans'],
    ['Angular', '8', '1 an'],
    ['Python', '6', '1 an'],
    ['Tensorflow', '5', '6 mois'],
    ['Docker', '7', '6 mois'],
    ['Unity 3D', '7', '2 ans'],
    ['Mise en production', '5', '6 mois'],
    ['Anglais', '9 écrit / 5 oral', '??']];
  public skillColumns: string[] = ['Compétences/Technologie', 'maitrise (/10)', 'Années d\'experiences'];

  public panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  public goToLink(url: string) {
    window.open(url, '_blank');
  }

}
