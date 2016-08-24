using UnityEngine;
using UnityEngine.UI;
using System;
using System.Collections;

public class Freja_Health : MonoBehaviour
{
    public int freja_HP;
    public int freja_damage;
    public float enemy_Hit;
    public Transform enemy;
    public Animator anim;
    public Animator animEnem;
    public bool attackedAble;
    public Text hp_Text;
    public Text damage_show;
    public Animator textAnim;
    public float startTime=0;
    // Use this for initialization
    void Start()
    {
        attackedAble = false;
        anim.SetInteger("Freja_HP", PlayerPrefs.GetInt("freja_HP"));
        anim.SetInteger("Freja_MHP", PlayerPrefs.GetInt("freja_MHP"));
    }

    void Update()
    {
        freja_HP = anim.GetInteger("Freja_HP");
        hp_Text.text = freja_HP + "/"+anim.GetInteger("Freja_MHP");
        if (Time.time - startTime >= 0.3) damage_show.text = "";

        if (freja_HP != 0)
        {
            
            freja_damage = 0;
            System.Random random = new System.Random();
            enemy_Hit = Vector3.Distance(transform.position, enemy.position);

            if (attackedAble == true)
            {
                damage_show.text = "";
                if (enemy_Hit < 8.5)
                {
                    freja_damage = random.Next(0, 10 + (int) (anim.GetFloat("Event_Counter")*100));

                    if (freja_damage > 0) damage_show.text = "" + freja_damage;
                    else if (freja_damage == 0) damage_show.text = "MISS";
                    startTime = Time.time;
                    textAnim.Play("Damage_Text_Up");

                    attackedAble = false;
                    freja_HP = freja_HP - freja_damage;
                    if (freja_HP <= 0)
                    {
                        freja_HP = 0;
                        anim.SetInteger("Freja_Dead", 1);
                    }
                    anim.SetInteger("Freja_HP", freja_HP);
                }
            }
            else
            {
                freja_damage = 0;
            }
        }
        if (attackedAble == false)
        {
            if (enemy_Hit > 8.5) attackedAble = true;
            freja_damage = 0;
        }
    }
}
