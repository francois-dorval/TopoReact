package com.github.dorval.francois.topo.plougastel.widget;

import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;

import androidx.recyclerview.widget.RecyclerView;

import com.github.dorval.francois.topo.plougastel.R;
import com.github.dorval.francois.topo.plougastel.model.SubSecteur;


public class SubSecteurButtonWidget extends RecyclerView.ViewHolder {



    private final Button button;



    public SubSecteurButtonWidget(LinearLayout v) {

        super(v);
        button = (Button) v.findViewById(R.id.btn);
    }

    public void setSubSecteur(SubSecteurButtonWidget holder, SubSecteur subSecteur) {
        button.setText(subSecteur.getNom().toString());
    }



    public void setOnClickListener(View.OnClickListener onClickListener) {
        button.setOnClickListener(onClickListener);

    }
}
