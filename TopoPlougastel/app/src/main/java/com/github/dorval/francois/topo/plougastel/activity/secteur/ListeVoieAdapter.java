package com.github.dorval.francois.topo.plougastel.activity.secteur;

import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import androidx.recyclerview.widget.RecyclerView;

import com.github.dorval.francois.topo.plougastel.R;
import com.github.dorval.francois.topo.plougastel.model.Voie;
import com.github.dorval.francois.topo.plougastel.widget.VoieWidget;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class ListeVoieAdapter extends RecyclerView.Adapter<VoieWidget> {
    private List<Voie> dataSet;



    // Provide a suitable constructor (depends on the kind of dataset)
    public ListeVoieAdapter(List<Voie> myDataset) {
        if (myDataset!=null){
            Collections.sort(myDataset);
            dataSet = myDataset;
        }else{
            dataSet = new ArrayList<>();
        }

    }

    // Create new views (invoked by the layout manager)
    @Override
    public VoieWidget onCreateViewHolder(ViewGroup parent, int viewType) {
        // create a new view
        LinearLayout v = (LinearLayout) LayoutInflater.from(parent.getContext())
                .inflate(R.layout.widget_voie, parent, false);

        VoieWidget vh = new VoieWidget(v);
        return vh;
    }

    // Replace the contents of a view (invoked by the layout manager)
    @Override
    public void onBindViewHolder(VoieWidget holder, int position) {
        holder.setVoie(holder, dataSet.get(position));
    }

    // Return the size of your dataset (invoked by the layout manager)
    @Override
    public int getItemCount() {
        return dataSet.size();
    }
}
