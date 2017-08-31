<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller
{
  //
  public function index()
  {
    return Article::take(5)->get()->keyBy('id');
  }

  //
  public function store(Request $request)
  {
    return true;
  }

}
