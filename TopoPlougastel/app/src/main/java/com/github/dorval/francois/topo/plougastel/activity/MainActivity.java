package com.github.dorval.francois.topo.plougastel.activity;


import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.FragmentManager;

import com.github.dorval.francois.topo.plougastel.R;
import com.github.dorval.francois.topo.plougastel.fragment.PdfReaderFragment;
import com.github.dorval.francois.topo.plougastel.fragment.SecteurFragment;

import org.apache.commons.lang3.StringUtils;

public class MainActivity extends AppCompatActivity {



    Toolbar toolbar;



    private SecteurFragment secteurFragment;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);
        initToolBar();

        FragmentManager fm = getSupportFragmentManager();
        PdfReaderFragment pdfReaderFragment = (PdfReaderFragment)fm.findFragmentById(R.id.pdf_reader_fragment);
        secteurFragment = (SecteurFragment)fm.findFragmentById(R.id.secteur_fragment);

        Intent i = getIntent();
        int indexPage=-1;
        MenuActivity.MenuElement selectedMenu = (MenuActivity.MenuElement) i.getSerializableExtra(MenuActivity.MENU_SELECTED);
        if (selectedMenu!=null){
            switch (selectedMenu){
                case TOUT:
                    indexPage = 1;
                    break;
                case PARADIS:
                    indexPage = 8;
                    break;
                case BIVOUAC:
                    indexPage = 18;
                    break;
                case MENEHAM:
                    indexPage = 28;
                    break;
                case RIVIERE:
                    indexPage = 76;
                    break;
                case CREMIOU:
                    indexPage = 81;
                    break;

            }
        }





           pdfReaderFragment.setCurrentPage(indexPage);
            pdfReaderFragment.displayCurrentPage();
            fm.beginTransaction()
                    //.setCustomAnimations(android.R.animator.fade_in, android.R.animator.fade_out)
                    .show(pdfReaderFragment)
                    .hide(secteurFragment)
                    .commit();

    }


    /**
     *
     */
    private void initToolBar(){
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        toolbar.setTitle(R.string.app_name);

        setSupportActionBar(toolbar);
        toolbar.inflateMenu(R.menu.toolbar_menu);
    }

    /**
     * titre
     */
    public void setCustomTitle(CharSequence title){
        if (toolbar!=null && StringUtils.isNotEmpty(title)){
            toolbar.setTitle(title);
        }


    }

}
