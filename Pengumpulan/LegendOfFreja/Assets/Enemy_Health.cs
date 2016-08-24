using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class Enemy_Health : MonoBehaviour {
    public int enem_HP;
    public int enem_damage;
    public float enemy_Hit;
    public Transform frejaMagic;
    public Transform enem_Spot;
    public Transform enemy_All;
    public Animator anim;
    public Animator freja;
    public bool attackedAble, increble;
    public float inc;
    public Text damage_show;
    public Text hp_show;
    public Animator textAnim;
    public float startTime = 0;

    // Use this for initialization
    void Start()
    {
        //   enemy_All.position = new Vector3(361, 0, 426);
        // enemy_All.localEulerAngles = new Vector3(0, 78, 0);
        if (PlayerPrefs.GetInt("Beginner") != 1)
        {
            increble = false;
        }
        else
        {
            increble = true;
            enem_HP = 100;
        }
        attackedAble = false;
    }

    void Update()
    {
        hp_show.text = enem_HP + "";
        System.Random random = new System.Random();
        if (Time.time - startTime >= 0.2) damage_show.text = "";

        if (enem_HP != 0 && increble)
        {
            enem_damage = 0;
            enemy_Hit = Vector3.Distance(enem_Spot.position, frejaMagic.position);
            if (attackedAble == true)
            {
                if (enemy_Hit < 3)
                {
                    enem_damage = random.Next(0, 20) + (5 - (int)enemy_Hit) * (int)freja.GetFloat("Event_Counter");

                    if (enem_damage > 0) damage_show.text = "" + enem_damage;
                    else if (enem_damage == 0) damage_show.text = "MISS";
                    startTime = Time.time;
                    textAnim.Play("Damage_Text_Up");

                    attackedAble = false;
                    if (enem_damage > 0) enem_HP = enem_HP - enem_damage;


                    if (enem_HP <= 0)
                    {
                        enem_HP = 0;
                    }
                }
            }else
            {
                if (enemy_Hit >= 2) attackedAble = true;
            }
        }
        if (!increble)
        {
            enem_HP = 100 + (int)(freja.GetFloat("Event_Counter")*150);
            increble = true;
        }
        if (enem_HP == 0 && increble)
        {
            //anim.enabled = false;
            //Dead = event counter naik
            //0 = dialog
            //0.5 = in-phase
        
            inc = freja.GetFloat("Event_Counter");
            enem_HP = 100 + (int) (freja.GetFloat("Event_Counter") * 150);
            if (inc % 1 != 0)
            {
             //Pindah posisi
                if (inc== 0.5)//Luxuria
                {
                     enemy_All.position = new Vector3(421, 0, 234);
                     enemy_All.localEulerAngles = new Vector3(0, 3, 0);
                     anim.transform.position = enemy_All.position;
                }
                 else if (inc== 1.5)//Invidia
                 {
                     enemy_All.position = new Vector3(430, 0, 124);
                     enemy_All.localEulerAngles = new Vector3(0, 280, 0);
                 }
                 else if (inc == 2.5)//Acedia
                 {
                     enemy_All.position = new Vector3(270, 0, 403);
                     enemy_All.localEulerAngles = new Vector3(0, 54, 0);
                 }
                 else if (inc == 3.5)//Avaritia
                 {
                     enemy_All.position = new Vector3(317, 0, 330);
                     enemy_All.localEulerAngles = new Vector3(0, 54, 0);
                 }
                 else if (inc == 4.5)//Gula
                 {
                     enemy_All.position = new Vector3(385, 0, 347);
                     enemy_All.localEulerAngles = new Vector3(0, 26, 0);
                 }
                 else if (inc == 5.5)//Superbia
                 {
                    enemy_All.position = new Vector3(242, 0, 158);
                    enemy_All.localEulerAngles = new Vector3(0, 30, 0);
                }else if (inc == 6.5)//Ending
                {
                    enemy_All.position = new Vector3(0, -20, 0);
                }
                inc = (float)0.5 + inc;
                freja.SetFloat("Event_Counter", inc);
                anim.enabled = true;

                int frjHP = freja.GetInteger("Freja_MHP");
                int frjNHP = freja.GetInteger("Freja_HP");
                frjHP += frjNHP/2;
                freja.SetInteger("Freja_MHP", frjHP);
                freja.SetInteger("Freja_HP", frjHP);

            }
        }

    }
}
