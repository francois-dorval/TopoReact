package com.github.dorval.francois.topo.plougastel.fragment;

import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.text.Html;
import android.text.method.LinkMovementMethod;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.github.dorval.francois.topo.plougastel.R;
import com.github.dorval.francois.topo.plougastel.activity.SecteurActivity;
import com.github.dorval.francois.topo.plougastel.activity.secteur.ListeSubSecteurAdapter;
import com.github.dorval.francois.topo.plougastel.activity.secteur.ListeVoieAdapter;
import com.github.dorval.francois.topo.plougastel.activity.secteur.SubSecteurButtonClickListener;
import com.github.dorval.francois.topo.plougastel.dao.SecteurDao;
import com.github.dorval.francois.topo.plougastel.model.Secteur;
import com.github.dorval.francois.topo.plougastel.model.SubSecteur;
import com.github.dorval.francois.topo.plougastel.model.Voie;
import com.github.dorval.francois.topo.plougastel.util.ErrorPopup;
import com.github.dorval.francois.topo.plougastel.util.ImageFromAsset;

import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class SecteurFragment extends Fragment {


    ;
    private RecyclerView recycler_view_voies;

    private RecyclerView recycler_view_subsecteurs;

    SecteurDao secteurDao = new SecteurDao();

    private Secteur secteur;

    ImageView img;

    TextView commentaire;

    private List<String> secteurPath;
    private ImageView poi_img;
    private TextView poi_txt;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        super.onCreateView(inflater, container, savedInstanceState);



        View view = inflater.inflate(R.layout.fragment_secteur, container, false);

        img = (ImageView)view.findViewById(R.id.img);
        poi_img = (ImageView)view.findViewById(R.id.poi_img);
        poi_txt = (TextView)view.findViewById(R.id.poi_txt);
        commentaire = (TextView)view.findViewById(R.id.commentaire);

        recycler_view_voies = (RecyclerView) view.findViewById(R.id.recycler_view_voies);
        recycler_view_voies.setHasFixedSize(true);

        recycler_view_subsecteurs = (RecyclerView) view.findViewById(R.id.recycler_view_subsecteurs);
        recycler_view_subsecteurs.setHasFixedSize(true);

        recycler_view_voies.setLayoutManager(new LinearLayoutManager(getContext()) {
            @Override
            public boolean canScrollVertically() {
                return false;
            }
        });

        recycler_view_subsecteurs.setLayoutManager(new LinearLayoutManager(getContext()) {
            @Override
            public boolean canScrollVertically() {
                return false;
            }
        });

        return view;
    }


    /**
     *
     * @param secteurPath
     */
    public void updateSecteurData(List<String> secteurPath){
        this.secteurPath = secteurPath;
        try {
            secteur = secteurDao.getSecteur(this.getActivity(), getStringSecteurPath(secteurPath));

            updateCommentaire(secteur);

            updateImage(secteur);

            updatePoi(secteur);

            //List<Voie> voies = VoieDaoStub.getVoies();
            List<Voie> voies = secteur.getVoies();
            recycler_view_voies.setAdapter(new ListeVoieAdapter(voies));

            final List<SubSecteur> subSecteurs = secteur.getSubsecteurs();
            recycler_view_subsecteurs.setAdapter(new ListeSubSecteurAdapter(subSecteurs,
                    new SubSecteurButtonClickListener() {
                        @Override
                        public void onItemClick(View v, int position) {
                            goToSecteur(subSecteurs.get(position));



                            // do what ever you want to do with it
                        }}));

            //setCustomTitle(secteur.getNom());
        } catch (Exception e) {
            e.printStackTrace();
            ErrorPopup.show(this.getContext(), "Erreur récupération données secteur");
        }
    }

    /**
     *
     * @param secteur
     */
    private void updatePoi(Secteur secteur) {
        if (StringUtils.isNotEmpty(secteur.getGps())){
            poi_img.setVisibility(View.VISIBLE);
            poi_txt.setVisibility(View.VISIBLE);
            poi_txt.setText( Html.fromHtml(secteur.getGps()));
            poi_txt.setMovementMethod(LinkMovementMethod.getInstance());

        }else{
            poi_img.setVisibility(View.GONE);
            poi_txt.setVisibility(View.GONE);
        }
    }

    /**
     * update image secteur
     * @param secteur
     */
    private void updateImage(Secteur secteur) {
        if (StringUtils.isNotEmpty(secteur.getImage())){
            try {
                Bitmap bitmap = ImageFromAsset.getBitmapFromAssets(img.getContext().getAssets(), secteur.getImage());
                img.setImageBitmap(bitmap);
                img.setVisibility(View.VISIBLE);
            } catch (IOException e) {
                e.printStackTrace();
                img.setVisibility(View.GONE);
            }
        }else{
            img.setVisibility(View.GONE);
        }

    }

    /**
     * mise à jour description
     * @param secteur
     */
    private void updateCommentaire(Secteur secteur) {
        String description = secteur.getDescription();
        if (StringUtils.isNotEmpty(description)){
            commentaire.setText(description);
        }else{
            commentaire.setText("Topo à venir");
        }


    }


    /**
     *
     * @param secteurPath
     * @return
     */
    private String getStringSecteurPath(List<String> secteurPath) {
        String res = "";
        Iterator<String> iterator = secteurPath.iterator();
        while (iterator.hasNext()) {
            String sec = iterator.next();
            res+=sec+"/";
        }
        return res;

    }

    /**
     *
     * @param subSecteur
     */
    private void goToSecteur(SubSecteur subSecteur) {
        secteurPath.add(subSecteur.getId());
        Intent intent = new Intent(getActivity(), SecteurActivity.class);
        intent.putExtra(SecteurActivity.SECTEUR_PATH_PARAM,  (ArrayList<String>)secteurPath);
        startActivity(intent);

    }

    /**
     *
     * @return
     */
    public CharSequence getSecteurName() {
        if (secteur!=null){
            return secteur.getNom();
        }
        return null;
    }
}
