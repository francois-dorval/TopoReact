package com.github.dorval.francois.topo.plougastel.util;


import com.github.dorval.francois.kerlouantopo.model.Voie;
import com.thedeanda.lorem.Lorem;
import com.thedeanda.lorem.LoremIpsum;

import java.util.ArrayList;
import java.util.List;


public class VoieDaoStub  {




    public VoieDaoStub() {

    }


    public static List<Voie> getVoies() {
        List<Voie> res = new ArrayList<>();
        res.add(getVoie1());
        res.add(getVoie2());
        res.add(getVoie3());
        res.add(getVoie4());
        res.add(getVoie5());
        res.add(getVoie6());

        Long i=1L;
        for(Voie voie:res){
            Lorem lorem = LoremIpsum.getInstance();
            voie.setId(i);
            voie.setCommentaire(lorem.getWords(0,20));
            voie.setNom(lorem.getWords(1,3));
            i++;
        }
        return res;
    }

    
    

    public static Voie getVoie1(){
        Voie voie = new Voie();
        voie.setCotation("5a");
        return voie;
    }

    public static Voie getVoie2(){
        Voie voie = new Voie();
        voie.setCotation("5c");
        return voie;
    }

    public static Voie getVoie3(){
        Voie voie = new Voie();
        voie.setCotation("5c+");
        return voie;
    }

    public static Voie getVoie4(){
        Voie voie = new Voie();
        voie.setCotation("5c+");

        return voie;
    }


    public static Voie getVoie5(){
        Voie voie = new Voie();
        voie.setCotation("7a");

        return voie;
    }

    public static Voie getVoie6(){
        Voie voie = new Voie();
        voie.setCotation("8a");

        return voie;
    }



}
