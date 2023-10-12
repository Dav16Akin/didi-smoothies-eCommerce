import React from "react";

const products = [
  {
    name: "Banana Burst",
    price: 1500,
    popular: true,
    img: "https://lh3.googleusercontent.com/pw/ADCreHfQ5Oqy4f92ATU5RDm3SeTr4TLOCA5-3OY6-ZPCkygQ39WUsMRMnq-1ntNmYpEiirCt-l6IboUd49TgfhbEqP5fabqL-kTrh3x9-bcQ5yJXdRAck5jJIVtiIi94VKV75CxJQ0mfBP6WWouZnReduXqvPTzpdSZ4Abg_LzxQeErsIPgBEUflL1K4jHzRE05xcsGHy9Br5r0UG4yt5gizLHfhX8eMLSU36F67TM69DwAG-ob55TEZ1_Zv6RtSo2-mV2x9X1rvA7ts42ULrIJa6DZ3JTIJ0anezSzJKtOsXU9_rQTaI8nzC6F8x3B1eaJZf1TnfEBCvIoaj_pvJ6StZVWJUx4eULMCSj8nsv-U0KEGwO3_wJzLN-J5ILGhuSGvQg-2bSBAD8Jct0gWTXJGdLmTmK98FpQJqjy7odVrCSazMqIrVa54PkZ-nFWOSYHNxA8nGRzntWtCwnrsmceYjuKC4bFDqshqIbUb401x8iDB-IdpDcN380vt_xHzFpvIpPgyEbJMzb74rvbp-mQrMna-fGmKtJKGh2IV3djYEC-pKPde532vFsl5dG9bJQV7eKU1FCR5RSsKVqgAuskN9itoFYJFaAwCGsJTslZW9x664e19F3crWI1VQTb8vNpzKX84l9R3R03vbHa8J7kEFPwOFx3rJh8TYZbZI2FdpFOTXb_PB33Zt2DE2AIH7_02U0wQgf6aRkgE9LzfBsXfYmR3ZMphKhg93XhhEXyVqcP17nmve6LGeJwiaVfPDLUoF2jUWiThVgvMS9CFcf_KdRiFWaQrpCpbMo_Dcq9HBnmk_CroEADLsxDeVUj-lyNhgD5lpzea4p3PaJXNiVq8oWmG-X04060yXPu1wYyAvYA_0KSswaE_as482v3Ojknv74oPybTwwqeeawKy9-x8fg=w517-h689-s-no?authuser=0",
    category: "smoothie",
  },
  {
    name: "Pineapple",
    price: 1500,
    popular: true,
    img: "https://lh3.googleusercontent.com/pw/ADCreHd7Jci4MKvFhMHFvwc-rvXqbJNCXISzQ5IRW7JEjQPg7ICf2JXfaMVOG1LGqZuOayyKre5KvuWbQ570IRWuFAT8Sxgyvl6K74ROI0hN7072pOr5Ytr7wHgqokYBtFr6JYXVx3LNSkdEr22ZD87y89a-GXgja0QflNo1QrsUKGrioHBqlxxW9FtO8KDdWBKH-lbxnoH3XWxqeV2jPf6HL2bOU6dVv4opEM9TTrTvN7sRLIeIX6TD7nA68lvcfFXyAWxC9TWLRbG2KzI_LgHGwehJuP2Um-9Mb8e6OHWMhpUZFae0JFSVjRubT3zmQpzR13k7FcIvI6T0hAqMKUVGi3YsBzF-yz4NF3AvnVb8S_PtP38xwNdxIMP-vtf6nCfcWzI2DXuqYrLIE7XhvkaOmX_lpuJdojhsB1Tz1LLt8jKnMhuSSGDlmmyWKgCf_LwzEKMMoF9RGyVxdB24fMbu1TSW4G4fgY8hoBGbfDBd0iCvmsI9DNoIQbtnCHKzH71YU7wxaRPRE95ooA3atduEtdEh6CHQmMdl0lYZ7WphVhZWe_T-An3Hs6fmpj7zxGeIiRhX5ImD86MHsSsBVlZOejjHCId9Ucp37mzKAz0jQbAbfVA7f8I5-3bzlOtS4F7ryxz8ZvyelxRwat2P_aIoyzUA5R1WCoXWj9ARm2wyXEa5jzAPfAx1HACAKbk2CZ_5FRZmuP1Yc85yOiD1lmATwLWrRsUO-7jpOdvwFejWpVd4VVqpEk3GeaUPPj-6_GddV_6jdxcJA5pDmVLHf6gDC2j1eEgyD0K01NPbr6EWEhupnUSgxrr3-nOo5ytnn7_RFqrPjtglstTFi36rjoacJqCStYO-n_-NSub_yorOTe9glsK204kWjcipXIzdOm0Lt37Uf0vt8aunZ0wXouUyng=w516-h689-s-no?authuser=0",
    category: "juice",
  },
  {
    name: "Water Melon",
    price: 1200,
    popular: true,
    img: "https://lh3.googleusercontent.com/pw/ADCreHcUP7t7l8_Lxi5BuD2WKueCBU1qlleKeV0oJbipjLRUzhcZGLNLQo4mOsxFjT9uV4DodW5eyXZopDaG9TF0aqTeD-b4DyKFlvd3BEHWCKQiOe46uoOxW6SOom12dU9BlvHk-Kv1JceDnYvekWfkCFMXLxsAD3-vZKrFRAtKKHP4dfiHnFiQgCxongVibxVBK2UWkp-bRQZOE_-6fvrrMV7sMWCPSbwkbQBYiXo0X0FnVKMpKiHNCLw839ZurI09q9abz-Dy6cjAiCjWCW4I5KVASBsamZU8ucU9i2Jz0Oab4LSC_mwVfkrRMZiAsv8hZFZ9hXbgmekDRyJz0Z5ww2siKUactYNkcFggcYHT2b8uSeESovsD2WbwT5Ngn-j2C97qVJ239lhKDdlRwaSvqjcT6jqerFefOaiH5Wf7Z7RD17k4vecYTNjxFje1vSK5CQr2z6JKHIKAEZvBkOpy7hyJqocwkHL-FEWh26mzQAuJ_SdkI5smY1vsYXD9I14c6rTgRXkXktPlN1tJjtJBisWsXuwLQHjC6kTP2msog9Em4qwbU2PZphcgY6a4Rj8FIDBIRMJPZUoNaK2rPoNb3Scu-USZ0Lj5ZG9vLDesj2_0V4pQwi67p6GDifLLJVeaFq-vvrRJMpvglp51qxKcd8D7guhp3KywPQoHfV2c4RCH_eudN2NCnpf70bHzajPOoJI9O7CHIeoUlQTxgPJ1N8BjYc4JsMETKFUHk7wEB9rnWeuybjpeq3XX-2lbRs8Wo8QslgY7PJef5_v2oMirhgEmgBf3wyr9xnaUekeYHe4JOs9Ab3wql4_UYhpgr1fU9ENe0lQcUnjGqoaUMpc8BEpTihuEdmGprphm3MBvIJYT6_PIG3Z-LpwTT9D3OudYd741HjCWkWOd3tMROINq5Q=w516-h689-s-no?authuser=0",
    category: "juice",
  },
  {
    name: "Carrot",
    price: 1500,
    popular: true,
    img: "https://lh3.googleusercontent.com/pw/ADCreHf2yBj-LYgqocRSVDf5pXnKn0M4UubudfUCC9vjGAYOA-1Sz3sAeNyhdP5X9Oi7b9f6--Nk1MLg2VopkrWbhyIwvfFShbYTTFNHzJ673KOFsmNx0bJ2uqwTuWKL_ba2eZQbFNUzVqpoXCRjD4VzdTVAFCFto6h8p_oH8_9AxANHLYz3kH8geaSTdhC2-H2n57iqcJz7czLvaamQuCalYoI0q4zgTao6iGjLeQoZsNzduko4zSrD2XxMLK6SCrUrLu5aWx8g-5Iz1rMSBwXY5S3hWXEs5k4kxC2Uq9nFuxj9q8z8HDiWCA8eJsVjdE2TzeSCCGQ9FkP6vZhMJ4_AzTUeEqu56Ap27PoYlrb0XvjH1Be6ER8wVz-cX4d54VUsWZgGsaOVMC_nUd6Y6dysVAPpj5pDW-yNRRqA6r50pj41Y23rC0VLec_z7EhGdFSbZhWpO0oAEf0fhTLVP7BQ1SCal3hBiyjoKS8zlKxwWIjdHNLcpW9mVJwqbHxbmxqsQoKf6VPxyzvyPhwcmBnDGXlmfhyaM71zsSuJe2qs3ZaYtsU8_7zPzthNtpRreZXd2y75ubvDyKrMzLj0TFQg1VO0qhRtPLWCuL-wFirEnTq0rLyKb3vIAAh7uQQQWfE3pe1-7lW2uagVAZMk5Hx_fmF69oNu6V5rjSGHlhddWP61-Eji4Vvvl4M4qdtag2e36iLsrzI18Ny6pjRH0Q9ZZb6BYfGNkbN7UG2o2NgttfK6Tot2FPKTXCVIpNqjXX5G5-F6k1lEJSGoK658DJMc2TkSlu0TwLFxn_3P0EqQzZcwewmspxxl_D3dwY-KAQfAzoTlJAKxjhIfUPBuJL61PG08YubjDtKUD04HeBijJqp5H3VKOPNWs3ZaEvuXz0QowxiUTSVvNF9mNF__f_3R8g=w517-h689-s-no?authuser=0",
    category: "juice",
  },
  {
    name: "Apple",
    price: 1500,
    popular: true,
    img: "https://lh3.googleusercontent.com/pw/ADCreHerLvrAPSPsz-CZ931MZFB5UKi03xkIcTAS7-lkZkDsSen9uq-CFJ89QD7HjW4m5DePzw7m8TIrULMMxbn-njNPkV9W5c73A6VLpWv0obBWzsOKGw85TbCOw3ieBFMG9VfI57RUO0pCUzZ4AYo_bsnUSc_dogpiwXkFpw1NmB5Pqcji4-JMPsdq-9pIkhFSNRGNCXd1slwcrH7Tf18ROd1bFdVtFj4EJecWNN3S2g6mvYFgAfoz2iFToqZVhA3B-YT6GosnHZFn0g72vjGPYWRNNXkRnnHZR8nYhWIDXy_RDITSO07y-u1I0Kdq5iNsHyMxeHIso2_JQObQsqCG8Qz6px4MmgxhNBo56j6Bg3-8K5VXAsHPAZw425hhBKL76gMhDzYpF2LMXeNpJVvsMtnVMyXNtAxtpl_eKkPiQu75DjULbdpKNe-dV4PqcBD8aydSiHeOmMKVzNIfRybos_IaB5DlwHK_1vPwbGN0pFD0qk-P8RG0CgHWi69fPKcgDTXctmf5REXyqcZ14zNt1vo06RXBChhopQDElC0Lw14eUWvzpc4sAzBmCueP67kJ6NS1tH_OIBzpo9XY6a6t_fb5-Zdk1nsK4gP8jt5RhF6GD5VG5KUZP3zIqZIdzrPuVK-GOr8nY1gV_5i86m8A8DZiPtXI8IF6oQ8pvvdoaVQfmlMEJXMoneI3OAL3IbN59QMhuhi8uI5mrcWuBKLCP5E2NIVQ-XRJcN1m1UIgKhtzYBulqtOH29-xUtVCvYOa2pQ71MN8QjQzJrOF2W6P38CbObuvol7ePxxsrsCbwLWxcXWubtDIQFrmGH9iujp8l50dTuXLkdD2-rRKeK-HULYnG-7plBW45ZDSy3iVkfuNXm9oqtYZc-iofki2joqepIgqJaEt_Sm5e47MDiNyuQ=w516-h689-s-no?authuser=0",
    category: "juice",
  },
  {
    name: "PineApple",
    price: 1200,
    popular: true,
    img: "https://lh3.googleusercontent.com/pw/ADCreHegns9rCdg2UH4Qf_Y2Smn1cFwscghRUHSqk_NhwKtej2ZoCej40lV7Q8fe0WUQ3zcU5SZK-Ekn_r9ldXoUIdpkAXLsGO0yZWRSlh6N0lgxlE154hF76a2OHscoAywnPKNfF5c0_bGUOMBC0BaDTd1geL97HWZUJvmgg7n9ZJSes5-jhZwd4rDt5XSnKXVLPwZ6sJy8AUmYfRd5J8ZkEtJ816xRyKXQYhltUwV6xyETnYr6JVct9oBQRdhMdxv0oONvenzQhmEn5fG3axWJ_WoljM0l9AGFNbTISc0s5syGDerQZQFrqDtYYYamXVChpDr3aSe2esZI60xEOQqzGd7TAZm0ZknzCwNSwnejfuR06IcqzJUxSyxJ8hIZ4JismSsAQydpCjorqVqtZvCjlyIZ-AW5KkKZIcmTNYd5pkhFTO0439CHY6nN6nhoLZ_hqAc9oYvZZAyHqvmvj0dAROD4DjlNJu4zfEfnh8nw1Q4x4Oq9sTi5dgdE0sou1C2WnyL3Jz_4US4ngJaMkMRcdffCV5tp3wrrR5hmCpZU3CjPqQHWp4y5C0mhjL7l6SlHu5WHhH07go-xy6NHX29LDj2znsjWAFJV-A3ELSKo1n_M_2r17pDejGPOM8gaMpU78ovfUiQoKRdccaFTgZFVFBiZ9N7ahOI_MS2vsGeKH0HgXJjb8v1RtfUahYXtA-CbB5zFEwPNxlxsdAvzOoi6I1n5cDyYaawXJ__lOY22Y_bsyARo8_dtXN_8vWTSMWk4RsZZVnht6zlyMnJWdRLbiBiu6p-VcAecOi6T0XG7FiwX_p6Kbi2Zy1dNicAWrlArw5T8-iWGeYUiNZ-eQSep-7MmUO0o5XoM_1w12Un09evRwXA2VBRz2IakkbNtWQQoTKS1baHnxgJw_yTbxdEdtQ=w516-h689-s-no?authuser=0",
    category: "juice",
  },
  {
    name: "Banana-Betruit",
    price: 1500,
    popular: true,
    img: "https://lh3.googleusercontent.com/pw/ADCreHfHoJ1SpK_IzJqnxqusrgWjIlG5C0gxn3GfJLGEMxk-iSgT_JTL7Hrz6VIsFNTcPFa_7GRSHGoFkLHGSjAc6hN_ROnsZI6wZlqkVkRcJgx59MMhUAFIby6xcjhAJYQ_bYH-KrkPOaYHXbpo32JBsc-uiVh7-p4zDn_Hdoox1vyPlNrQsvPk5U_3W77dkLoCOPdQxGpyKCxMBm2bjNJYelUlZwSaw5svWgJP34ymU8IL8UAmOZ8Ga07DQHXQb86pChCoKoyRD-q9fYpC5s8w7zRCjUmee5X0P7FrOHEy6g008rvqQM3qpixuPKKFdJFc-56_qc2KWHBxGf6x9Tc1DyNk4IqNUitdVRocGua_53iKJbd_by8J-fZXFsACyNUSQaE-_EuhKzKJnjOrFvn-2fVSoRgPdcdhVvMQUzJL8MU6Nlf9JeKoSt_n1tZBIet-INVFrTMj5b7OLfuZD7uMXA5b-AR8NbgFb2BaIrebIe_6_1WWskOqenS9Xh83fcgxPgjEusRWVtCSXdAAZoAMC3rUmsdW6IaHVM9APCoNrdfVnecLEhPOSjb9C5nYf9_cQI73jDkqv2YEbbWN3uwIj08qHT2WQZIzTvZq1kPdkRNZh64UiWDxx8SokJdNpMrlwDxCx4j_qy4JcHfbJPtaGLFR01G7SifI-4L_Aav8LqcT7uRoMcivL8VHPOo9E_Q1V97Z-23mM7Z4tEtJTcjxkPMsu7gaWR5qcseOWmWBgtB34hD1RqMNiTHrCLvEvMzn9PjTpY-Kl2KoOyh3RjIDRduyAlHd8frpLYjVL6XfpV1xfCiyR3DCy2aMxz_ZUBePRWJUIJEyJBfZdfvrL7M4Dy8FYouj_IeLzIXeSE6G5y_GFTS3UMax8d7WQr3qZ2minBgJcuSaBQVYLFjfkRQfJg=w516-h689-s-no?authuser=0",
    category: "smoothie",
  },
  {
    name: "Combo",
    price: 6500,
    popular: true,
    img: "https://lh3.googleusercontent.com/pw/ADCreHdCH18Tg7OiuNsFdjuj1I7JXv9Vk68WbqLgPrqgG0J1c7VrMe9bcihFqlm0-bZa7LaUmwP3asYYve4E7XOuADbqzbyd0qgrQhN5dKPcsSbO9moxqBU8lYxkrQ70LhZb8fPT84bBmqE7nmig5bo4Duxwwo_nK7PzHjZ9Nbcqhp44bztbjcNp6EUqbIouTyAZn5ky_ynUaTqFcfTx_GadhjXMpKtGCia-02xrl-CKHa-288DzF2Xj7U9DKkI8LOBPU5W8uKT74DPl5p9ELmlBpFuqvbizTGjUsuzokA0D4-915AUItnGwOKtl4Cl_SeRc-dUfgOLFDJLRIjFKRWamGL5AuhM5w4MYIKD1L5JehDbtJlwewc-Hgc8MmdcallD0TDA5ON13yAS3K2Hcr6J1Z_7UKTqdzzviLhANyOwSAKd9Ve3xQk1WjtAHO0LfvK0TqEUQF5NEzC_LbARv26hd1EQHlnZpEOks3rWEILZSy4KS8_JXYFcIiHbwDnrS-d3SrAWewuHCJy9FKKHANNmWM-HRcJymypXI2yp2ZXgv8KbG_8pT5_W7j0XXBZ1_Xbn7YUARzb02ela_hOt7BZbqMdrLZO-bfYsvP03Nvoa-846E7N7bsID67J1nDxgcUTf8CUuNKLhLlxJXp0IZqoXpzBtOywdbWsegaTFY_t5E2_NT4Hm0QRFkJko7_FV63Y1LHO3qfl9p5Qw9v77kFj-O4sPoAaR_8fYaxVEhuOeSX4wSKS0OjKUNqy1OZTn71aJT1LtuDEwroVvKUftaZPCYPSpZYw_BDw1tc7T00PTOTOZzLqaHTg4FjdvnE3UxZuGCUy1u_AG09HuDHvAdQ7NcHejZGmK6hht7NJH6-helSWtCcZEkVwdavFwqUd_L7qal7CXwoi6TK4oJOrUsqcxU0A=w516-h689-s-no?authuser=0",
    category: "juice",
  },
  {
    name: "Detox",
    price: 1500,
    popular: true,
    img: "https://lh3.googleusercontent.com/pw/ADCreHeJGJiTuk3-X-77vxFh9RFvEqIJE9JIHBCH1BhUSJS6zcVY0ZzxX1MkyF5IUmlh9qxqYkY9GV3t7UD4Hd9F4KP2zprzNcFZnIWw3aRkO0TekgJgo3RsVM6qnuFbJs0hBgDSRSFV0hUbDzEwhwr8gcfLFWaePw0scw4hlyP9_xulXqMj60a1RGfF2JikR7-g19jG18XfWxuU98ob2BZ4IDipss2GrTltqIo8ZYhW_jRgdKzMQXs3jME4IHbgCi9cnrC2d4isnt8QQkd2goe8D2RK_JwmoHYbBH3-5-9NwmRzjoWwM1cpWR0XdRQ2dHJya1o8Jg7x5MI8_NQ0iImsWhzHNU2jZB7AmP3J3xLbe4Qi8Lo9VF-THgpcnrbd9gsGLWMtyxCy7IorTAvwuv5FD1d-s6G4L8o8b5HCT7M8feB8qmRIhWp-MdYYCN3b42VyzoafpCPFPYji_jhF__FNGlEBoO6tmCLAp-bGDh6MtuU1UHIaDFyxgGBnDG5RsUMqGHhpwZMBU1fWD6Ih-EvsNMFKId9cufi6_OhC3PeqMMVPzlkxGbDwWsN0PzX-GfltRg8nNFzAwIdkPNVstLFPiiwsVl0R4W_IwHpsahCkg-2FbO5AlYm_GzHMrdTT9b0VGby-tUvkEyiUO3PIoGx5qKOGE9cEFvhb33bx67E5psjkLCwnnuxPsaTX5iskUJBoP_Rcb3lLUi84tTbuduR41WnaZNEAzfsO1z_FyFwyMHGYHS6vFTHoDTJ_gfh5JVC3KBID1JS7Yt51nIUEgMDBtRMtfRFtxgBjfFQ4WIKB35VJk4TH9rACwh6-JjaUIbyxl9orE9Jigstc48hGm5WaNBXk6UcVbh6uy10oSyJbDXAKiy78e-CdlaQ4UkQo0Ys04X7Kk_pELHDwyYbkbTFEdg=w516-h689-s-no?authuser=0",
    category: "juice",
  },
  {
    name: "PineApple",
    price: 1500,
    popular: true,
    img: "https://lh3.googleusercontent.com/pw/ADCreHer0ucCyuNSNVJlps0Ba2r7D7wsjy7vSmWqwkHgm-4KEMDXlk07w5OhKPVF8J0ef9Ll9mXVxYul5pMnlJ4AUZi5BzaZ0WJuBtZ-wxosybxBQiorsu3vt3Mr-8EEp6kGx9eEd3J8SC4fp3ZJERezwPl9f6fcPdtem9eQjwe5VF4OZ3LLCFjdxII7exJA7uU3CyaQst2pQdi3_y4I95Quyh7N8z0V2hJLqwH_NM78poCmHHgFtir4UsOR1Uf37ViZktVqlOIpt3GjIvMwF4Gh-b7r5zgkfZ5XSps9NRt7CTcqkGBoKekZjxGWHdM4Rbx8cnjhCy0S5mAGrFtzXJtduTN5A4-23VuNfz-o4AchIIGNe68Wd5_CWFhBa9HD18AuGAqkxT2TSmDPsURgtmRh0gnxNHG3rZ7Ky538Fq8ZHmez_bdwedk8T8NPV-q94G8J-h_JFUEfE9L53hJrx0v19PybMj0_8jMtKH5Cjqiq6y76PmbP8fTdgHkEFo5-weOpT19oyEF2EXY0LaVuMpsUIB_WRHePmzBLu5Amn-8ahq9lebyoyBI2BntY4zuxNfHLuOyQ2mZIknokAyCgjbOUkIreUZ8GAWm3PtegqO1jcEIfRFpMH8NeKW3eZsF8z3bL5dAv3KjUtaPolI-wwMa-lePeOpow4S1dq87isfLypjuaqjs5vNTw0vOctj9P6b6cteDUlkU7Xl2ipkNqCM6SoAw_NKkWIy9cuyc8qXBs1MdJsYpYFdhix1_NgGpow6hj4rhyniHpcs9Y0BYrCCq-iQjRUz4BLA2kne6Gj-Wq68_zPVgTJxrMj0_WP3kBPEieHR7ZxW5tuicEIRhm6ZPvudXxhRLJY7KE6ttrkpBD7SF_Msh-XGd1IqwzHqbLTZsCtKvy8RaPz_udF1A-tM8GNQ=w516-h689-s-no?authuser=0",
    category: "juice",
  },
];

const Products = () => {
  return (
    <div className=" divide-x-2 h-screen relative">
      <div className="w-full">
        <div className="container mx-auto p-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product, index) => {
              return (
                <div className="my-8 cursor-pointer" key={index}>
                  <img
                    className="h-94 w-full object-cover object-center"
                    src={product.img}
                    alt={product.name}
                  />
                  <div className="p-2">
                    <p className="text-xs text-left font-light uppercase">
                      {product.category}
                    </p>
                    <h3 className="text-left font-bold">{product.name}</h3>
                    <h4 className="text-left">#{product.price}.00</h4>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No Products Available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
