using UnityEngine;
using System.Collections;

public class Enemy_Movement : MonoBehaviour {
    public Transform freja;
    public Animator anim;
    public float distance;
    
    // Use this for initialization
    void Start () {
        
    }
	
	// Update is called once per frame
	void Update () {
        if (anim.enabled == true)
        {
            distance = Vector3.Distance(transform.position, freja.position);
            anim.SetFloat("Enem_Attack", distance);
        }
        //transform.LookAt(freja.position, transform.up);
        //if (distance < 10)
        //{
          //  anim.SetFloat("Enem_Attack", -1);

    }

   /* void OnGUI()
    {
            GUI.Label(new Rect(Screen.width / 2, Screen.height / 2, 10000, 2000), ""+distance);
    }*/
}
