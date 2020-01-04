package com.github.dorval.francois.topo.plougastel.widget;

import android.graphics.Bitmap;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.github.dorval.francois.topo.plougastel.R;
import com.github.dorval.francois.topo.plougastel.model.Voie;
import com.github.dorval.francois.topo.plougastel.util.ImageFromAsset;

import org.apache.commons.lang3.StringUtils;

import java.io.IOException;


public class VoieWidget extends RecyclerView.ViewHolder implements View.OnClickListener {


    private final TextView cotation;
    private final TextView nom;
    private final TextView id;
    private final TextView commentaire;
    private final ImageView camera;
    private final ImageView poi;
    private final ImageView photo;


    private boolean photoPresent = false;

    /**
     *
     * @param v
     */
    public VoieWidget(LinearLayout v) {

        super(v);
        id = (TextView) v.findViewById(R.id.id);
        nom = (TextView) v.findViewById(R.id.nom);
        cotation = (TextView) v.findViewById(R.id.cotation);
        commentaire = (TextView) v.findViewById(R.id.commentaire);
        poi= (ImageView) v.findViewById(R.id.poi);
        camera = (ImageView) v.findViewById(R.id.camera);
        photo = (ImageView) v.findViewById(R.id.photo);

        View root = v.findViewById(R.id.root);
        root.setOnClickListener(this);
    }

    /**
     *
     * @param holder
     * @param voie
     */
    public void setVoie(VoieWidget holder, Voie voie) {

        //id secteur
        id.setText(voie.getId().toString());

        //nom voie
        nom.setText(voie.getNom());

        //cotation
        if (voie.getCotation()!=null){
            cotation.setText(voie.getCotation());
        }else{
            cotation.setText("?");
        }

        //commentaire
        if (StringUtils.isNotEmpty(voie.getCommentaire())){
            commentaire.setText(voie.getCommentaire());
            commentaire.setVisibility(View.VISIBLE);
        }else{
            commentaire.setVisibility(View.GONE);
        }

        //poi
        if (StringUtils.isNotEmpty(voie.getGps())){
            poi.setVisibility(View.VISIBLE);
        }else{
            poi.setVisibility(View.GONE);
        }

        //photo
        if (StringUtils.isNotEmpty(voie.getPhoto())){
            photoPresent = true;
            try {
                Bitmap bitmap = ImageFromAsset.getBitmapFromAssets(holder.itemView.getContext().getAssets(), voie.getPhoto());
                photo.setImageBitmap(bitmap);

            } catch (IOException e) {
                e.printStackTrace();
                camera.setVisibility(View.GONE);
                photoPresent = false;
            }

            camera.setVisibility(View.VISIBLE);
            photo.setVisibility(View.GONE);
        }else{
            photoPresent = false;
            camera.setVisibility(View.GONE);
            photo.setVisibility(View.GONE);
        }
    }


    @Override
    public void onClick(View view) {
        if (photoPresent){
            if (View.GONE == photo.getVisibility()){
                photo.setVisibility(View.VISIBLE);
            }else{
                photo.setVisibility(View.GONE);
            }
        }
    }
}
