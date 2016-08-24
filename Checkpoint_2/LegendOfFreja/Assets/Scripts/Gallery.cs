using UnityEngine;
using System.Collections;
using System.Text;
using UnityEngine.UI;
using System.IO;
using UnityEngine.SceneManagement;

public class Gallery : MonoBehaviour {

    // Use this for initialization
    public RawImage charDisplay;
    public RawImage imageDisplay;
    public Text descItem;
    public GameObject backPrev;
    public GameObject infoBox;
    public Text errMess;
    public float eventCount;
    

    public void CharLoad(string picName, string textName)
    {
        charDisplay.gameObject.SetActive(true);
        infoBox.SetActive(true);
        charDisplay.texture = Resources.Load<Texture>("gallery/" + picName);
        descItem = Resources.Load<Text>("gallery/" + textName);
    }

    public void ImageLoad(string picName)
    {



        imageDisplay.gameObject.SetActive(true);
        backPrev.SetActive(true);

        imageDisplay.texture = Resources.Load<Texture>("gallery/" + picName);
    }

    public void ShowErrorMess()
    {
        errMess.gameObject.SetActive(true);
        charDisplay.gameObject.SetActive(false);
        infoBox.SetActive(false);
        errMess.text = "LOCKED";        
    }

    public void PrevBack()
    {
        errMess.gameObject.SetActive(false);
        imageDisplay.gameObject.SetActive(false);
        backPrev.SetActive(false);
    }

    public void Back()
    {
        SceneManager.LoadScene("mainMenu");
    }


    //LOAD ITEM
    public void Char01()//Freja
    {
        eventCount = PlayerPrefs.GetFloat("ECG");
        if (eventCount > 1) CharLoad("Char01", "DescChar01");
        else ShowErrorMess();
    }

    public void Pic01()//
    {
        eventCount = PlayerPrefs.GetFloat("ECG");
        if (eventCount > 1) ImageLoad("Pict01");
        else ShowErrorMess();
    }
    public void Char02()//Freja
    {
        eventCount = PlayerPrefs.GetFloat("ECG");
        if (eventCount > 2) CharLoad("Char01", "DescChar01");
        else ShowErrorMess();
    }

    public void Pic02()//
    {
        eventCount = PlayerPrefs.GetFloat("ECG");
        if (eventCount > 2) ImageLoad("Pict01");
        else ShowErrorMess();
    }


}
