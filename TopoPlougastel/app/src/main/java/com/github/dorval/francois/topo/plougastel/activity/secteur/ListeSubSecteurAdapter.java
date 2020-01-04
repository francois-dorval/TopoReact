package com.github.dorval.francois.topo.plougastel.activity.secteur;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.github.dorval.francois.topo.plougastel.R;
import com.github.dorval.francois.topo.plougastel.model.SubSecteur;
import com.github.dorval.francois.topo.plougastel.widget.SubSecteurButtonWidget;

import java.util.ArrayList;
import java.util.List;


public class ListeSubSecteurAdapter extends RecyclerView.Adapter<SubSecteurButtonWidget> {
    private final SubSecteurButtonClickListener listener;
    private List<SubSecteur> dataSet;



    // Provide a suitable constructor (depends on the kind of dataset)
    public ListeSubSecteurAdapter(List<SubSecteur> myDataset, SubSecteurButtonClickListener listener) {
        if (myDataset!=null){
            dataSet = myDataset;
        }else{
            dataSet = new ArrayList<>();
        }
        this.listener = listener;


    }

    // Create new views (invoked by the layout manager)
    @Override
    public SubSecteurButtonWidget onCreateViewHolder(ViewGroup parent, int viewType) {
        // create a new view
        LinearLayout v = (LinearLayout) LayoutInflater.from(parent.getContext())
                .inflate(R.layout.widget_subsecteur_button, parent, false);

        final SubSecteurButtonWidget sb = new SubSecteurButtonWidget(v);
        sb.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                listener.onItemClick(v, sb.getLayoutPosition());
            }
        });        return sb;
    }

    @Override
    public void onBindViewHolder(@NonNull SubSecteurButtonWidget subSecteurButtonWidget, int i) {
        subSecteurButtonWidget.setSubSecteur(subSecteurButtonWidget, dataSet.get(i));

    }



    // Return the size of your dataset (invoked by the layout manager)
    @Override
    public int getItemCount() {
        return dataSet.size();
    }
}
