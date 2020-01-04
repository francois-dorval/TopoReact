package com.github.dorval.francois.topo.plougastel.activity;


import android.os.Bundle;
import android.os.Handler;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import com.github.dorval.francois.topo.plougastel.R;
import com.github.dorval.francois.topo.plougastel.fragment.SecteurFragment;
import com.github.dorval.francois.topo.plougastel.model.Secteur;

import org.apache.commons.lang3.StringUtils;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("unchecked")
public class SecteurActivity extends AppCompatActivity {

    public static final String SECTEUR_PATH_PARAM = "SECTEUR_INTENT_PARAM";

    Toolbar toolbar;

    private SecteurFragment secteurFragment;

    static List<String> secteurPath = new ArrayList<>();



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_secteur);
        initToolBar();

        FragmentManager fm = getSupportFragmentManager();

        secteurFragment = (SecteurFragment) fm.findFragmentById(R.id.secteur_fragment);


        getPathFromIntent();

        secteurFragment.updateSecteurData(secteurPath);
        setCustomTitle(secteurFragment.getSecteurName());
    }

    /**
     *
     */
    private void getPathFromIntent(){
        Serializable serializableExtra = getIntent().getSerializableExtra(SECTEUR_PATH_PARAM);
        if (serializableExtra !=null && serializableExtra instanceof ArrayList){
            secteurPath = (ArrayList<String>)serializableExtra;
        }else{
            secteurPath = new ArrayList<>();
            secteurPath.add(Secteur.NEIZVRAN);
        }
    }


    @Override
    public void onRestart() {
        new Handler().post(new Runnable() {
                               public void run() {

                                   final FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
                                   ft.detach(secteurFragment);
                                   ft.attach(secteurFragment);
                                   ft.commit();
                                   secteurFragment.updateSecteurData(secteurPath);
                                   SecteurActivity.this.setCustomTitle(secteurFragment.getSecteurName());
                               }});

        super.onRestart();
    }

    /**
     *
     */
    private void initToolBar() {
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        toolbar.setTitle(R.string.app_name);

        setSupportActionBar(toolbar);
        toolbar.inflateMenu(R.menu.toolbar_menu);
    }

    /**
     * titre
     */
    public void setCustomTitle(CharSequence title) {
        if (toolbar != null && StringUtils.isNotEmpty(title)) {
            toolbar.setTitle(title);
        }

    }

    @Override
    public void onBackPressed() {
        if (secteurPath!=null && secteurPath.size()>1){
            secteurPath.remove(secteurPath.size()-1);
        }
        super.onBackPressed();
    }

}
