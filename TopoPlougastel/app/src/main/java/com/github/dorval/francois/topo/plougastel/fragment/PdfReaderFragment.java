package com.github.dorval.francois.topo.plougastel.fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import androidx.fragment.app.Fragment;

import com.github.barteksc.pdfviewer.PDFView;
import com.github.barteksc.pdfviewer.listener.OnPageChangeListener;
import com.github.barteksc.pdfviewer.listener.OnPageErrorListener;
import com.github.barteksc.pdfviewer.scroll.DefaultScrollHandle;
import com.github.dorval.francois.topo.plougastel.R;
import com.github.dorval.francois.topo.plougastel.activity.MainActivity;
import com.github.dorval.francois.topo.plougastel.util.OnSwipeTouchListener;

public class PdfReaderFragment extends Fragment implements OnPageChangeListener, OnPageErrorListener {

    private PDFView pDFView;

    private static final int PAGE_NUMBER = 96;

    private int indexPage = 3;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        super.onCreateView(inflater, container, savedInstanceState);

        View view = inflater.inflate(R.layout.fragment_pdf_reader, container, false);

        pDFView = (PDFView) view.findViewById(R.id.pdfView);

        pDFView.setOnTouchListener(new OnSwipeTouchListener(getActivity()) {
            public void onSwipeTop() {
            }

            public void onSwipeRight() {
                goLeft();
            }

            public void onSwipeLeft() {
                goRight();
            }

            public void onSwipeBottom() {
            }

        });
        return view;
    }

    public void setCurrentPage(int index) {
        indexPage = index;
    }


    /**
     * pdf ->
     */
    private void goRight() {
        if (indexPage < PAGE_NUMBER) {
            indexPage++;
        }
        displayCurrentPage();

    }

    /**
     * pdf <-
     */

    private void goLeft() {
        if (indexPage > 1) {
            indexPage--;
        }
        displayCurrentPage();

    }



    /**
     * affichage page pdf
     */
    public void displayCurrentPage() {
        String res = "pdf/" + String.format("%02d.pdf", indexPage);
        Toast.makeText(getActivity(), "page " + indexPage, Toast.LENGTH_SHORT).show();


        pDFView.fromAsset(res)
                .onPageChange(this)
                .enableAnnotationRendering(true)
                .scrollHandle(new DefaultScrollHandle(getActivity()))
                .spacing(10) // in dp
                .onPageError(this)
                .load();
        changeTitle();
    }

    /**
     * titre
     */
    private void changeTitle() {
        if (indexPage < 8) {
            setCustomTitle(getResources().getText(R.string.app_name));

        } else if (indexPage < 18) {
            setCustomTitle(getResources().getText(R.string.petit_paradis));

        } else if (indexPage < 28) {
            setCustomTitle(getResources().getText(R.string.bivouac));

        } else if (indexPage < 76) {
            setCustomTitle(getResources().getText(R.string.meneham));

        } else if (indexPage < 81) {
            setCustomTitle(getResources().getText(R.string.riviere));

        } else {
            setCustomTitle(getResources().getText(R.string.cremiou));
        }

    }

    private void setCustomTitle(CharSequence text) {
        ((MainActivity)getActivity()).setCustomTitle(text);

    }

    @Override
    public void onPageChanged(int page, int pageCount) {

    }

    @Override
    public void onPageError(int page, Throwable t) {

    }
}
