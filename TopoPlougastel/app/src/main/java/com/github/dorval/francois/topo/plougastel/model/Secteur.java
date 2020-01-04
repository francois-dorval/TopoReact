package com.github.dorval.francois.topo.plougastel.model;

import java.util.ArrayList;
import java.util.List;

public class Secteur {


    public static final String NEIZVRAN = "NEIZVRAN";

    private String nom;

    private String image;

    private String id;

    private String description;

    private String gps;

    private List<SubSecteur> subsecteurs= new ArrayList<>();

    private List<Voie> voies = new ArrayList<>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description1) {
        this.description = description1;
    }



    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getImage() {return image;    }

    public void setImage(String image) {this.image = image;    }

    public List<Voie> getVoies() {
        return voies;
    }

    public void setVoies(List<Voie> voies) {
        this.voies = voies;
    }

    public List<SubSecteur> getSubsecteurs() {return subsecteurs;}

    public void setSubsecteurs(List<SubSecteur> subsecteurs) {this.subsecteurs = subsecteurs;}

    public String getGps() {        return gps;    }

    public void setGps(String gps) {        this.gps = gps;    }

    @Override
    public String toString() {
        return "Secteur{" +
                "nom='" + nom + '\'' +
                ", image='" + image + '\'' +
                ", id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", gps='" + gps + '\'' +
                ", subsecteurs=" + subsecteurs +
                ", voies=" + voies +
                '}';
    }
}
