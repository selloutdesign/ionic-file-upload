import { Component } from '@angular/core';
import {App, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular'

import { Camera, File, Transfer, FilePath } from 'ionic-native';


/*
  Generated class for the CameraPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
  	selector: 'page-camera-page',
  	templateUrl: 'camera-page.html'
  })
  export class CameraPage {

  	loading: Loading;
  	imgOne: string;

  	constructor(
  		public appCtrl: App,
  		public navCtrl: NavController,
  		public actionSheetCtrl: ActionSheetController,
  		public toastCtrl: ToastController,
  		public platform: Platform,
  		public loadingCtrl: LoadingController,
  		public navParams: NavParams) {}

  	ionViewDidLoad() {
  		console.log('ionViewDidLoad UploadPage');
  	}

  	private presentToast(text) {
  		let toast = this.toastCtrl.create({
  			message: text,
  			duration: 3000,
  			position: 'top'
  		});
  		toast.present();
  	}

  	public takePicture() {
  		var options = {
  			quality : 75, 
  			sourceType : Camera.PictureSourceType.CAMERA, 
  			encodingType: Camera.EncodingType.JPEG,
  			saveToPhotoAlbum: false,
  			correctOrientation: true
  		};

  		Camera.getPicture(options).then((imagePath) => {
  			this.imgOne = imagePath;
  		}, (err) => {
  			this.presentToast('Error while selecting image.');
  		});
  	}

  	public uploadImage() {
  		const fileTransfer = new Transfer();
  		var url = "https://file-upload-poundimal.c9users.io/upload";
  		var targetPath = this.imgOne;

  		var filename = this.imgOne.substr(this.imgOne.lastIndexOf('/') + 1);

  		var options = {
  			fileKey: "file",
  			fileName: filename,
  			chunkedMode: false,
  			mimeType: "image/jpg",
  			params: {"directory":"upload", "fileName":filename}
  		};
  		
  		fileTransfer.upload(targetPath, url, options).then(data => {
  		}, err => {
  			this.presentToast(err);
  		});		
  	}
  }
