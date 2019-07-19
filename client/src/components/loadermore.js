import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';
import Create from './Create';
import './loadmore.css'


import { useState } from 'react';




function Loadermore () {
  const [modalOpen, setTeste] = useState(false);

  return (

    $(document).ready(function(){
      $(".content").slice(0, 4).show();
      $("#loadMore").on("click", function(e){
        e.preventDefault();
        $(".content:hidden").slice(0, 4).slideDown();
        if($(".content:hidden").length == 0) {
          $("#loadMore").text("No Content").addClass("noContent");
        }
      });
      
    })



  );



}


export { Loadermore } ;