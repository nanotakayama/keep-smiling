"use strict";
import './structure/adjustVh';
import './structure/adjustViewport';
import FrontSlide from './components/frontSlide';
import BannerSlide from './components/bannerSlide';
import Gnavi from './components/gnavi';
import UploadTxt from './components/uploadTxt';
import Category from './components/category';
import SvgMotion from './components/svgMotion';

document.addEventListener("DOMContentLoaded", () => {

  // フロントスライド
  const frontSlide = new FrontSlide();

  // バナースライド
  const bannerSlide = new BannerSlide();

  // バナースライド
  const gnavi = new Gnavi();

  // アップロード
  const uploadTxt = new UploadTxt();

  // カテゴリー
  const category = new Category();

  // 背景モーション
  const svgMotion = new SvgMotion();

});
