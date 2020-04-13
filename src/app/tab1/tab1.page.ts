import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IProject } from '../models/models.project';
import { ProjectService } from '../api/project.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public projectList: Array<IProject>;

  constructor(
    private navCtrl: NavController,
    private projectservice :ProjectService
  ) {
    this.projectList = [];
  }

  ngOnInit(): void {
    this.projectservice.getProjects().subscribe((res)=>{
     this.projectList = res as IProject[];
    });
  }

  public showConversationPage ()
  {
    this.navCtrl.navigateForward('conversation')
  }

}
