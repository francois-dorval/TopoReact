package com.github.dorval.francois.topo.plougastel.model;


import androidx.annotation.NonNull;

import java.io.Serializable;

public class Voie implements Comparable<Voie>, Serializable{


    public static final String VOIE = "VOIE";

    Long id;

    String cotation;

    private String nom;

    private String commentaire;

    private String photo;

    private String gps;


    public String getCotation() {
        return cotation;
    }

    public void setCotation(String cotation) {
        this.cotation = cotation;
    }


    public String getNom() {return nom;}

    public void setNom(String nom) {this.nom = nom;}

    public String getCommentaire() {return commentaire;  }

    public void setCommentaire(String commentaire) {        this.commentaire = commentaire;    }

    public String getPhoto() {return photo;}

    public void setPhoto(String photo) {        this.photo = photo;    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getGps() {        return gps;    }

    public void setGps(String gps) {        this.gps = gps;    }

    @Override
    public int compareTo(@NonNull Voie voie) {
        return (int)(id-voie.id);
    }

    @Override
    public String toString() {
        return "Voie{" +
                "id=" + id +
                ", cotation='" + cotation + '\'' +
                ", nom='" + nom + '\'' +
                ", commentaire='" + commentaire + '\'' +
                ", photo='" + photo + '\'' +
                ", gps='" + gps + '\'' +
                '}';
    }
}
