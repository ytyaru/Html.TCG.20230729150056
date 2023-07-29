class Human {
    static Sex = Object.freeze({
        A: 0, // 無 Asexual
        M: 1, // 男 male
        F: 2, // 女 female
        B: 3, // 両 both sexes
    })

    constructor() {
        this.name = '人物の名前'
        this.race = '人物の種族' // 人,妖精,妖怪,神,悪魔,サイボーグ,思念体,霊,宇宙人,...
        this.tribe = '人物の部族' // 戦闘民族,アマゾネス,第8部隊,...
        this.affiliation  = '人物の所属' // 惑星,国,企業,組織,団体,...
        this.title = '人物の役職' // 王,社長,平民,隊員,...
        this.profession = '人物の職業' // 剣士,建築士,...
        this.text = '人物のフレーバーテキスト'

        this.sex = this.Sex.A
        this.age = 0
        this.height = 0
        this.weight = 0

        this.life = 0 // 命
        this.vitality = 0 // 生,体,生命力 
        this.mentality = 0 // 心,精神力 Mental 心が折れると敗北or恐慌状態
        this.stamina = 0 // 活,活力
        this.conditions = [] // 傷,怪我,病,火傷,疲労,睡眠,氷結,石化,麻痺,毒,...

        this.power = 0 // 力
        this.toughness = 0 // 丈夫さ
        this.agility = 0 // 素早さ
        this.dexterity = 0 // 器用さ

        this.mind = 0 // 精神力 Mental
        this.intelligence = 0 // 知性
        this.appearance = 0 // 外見の魅力
        this.luck = 0 // 幸運

        this.natures = [] // 質,性質,体質,気質,本質（不変の性《サガ》、質《タチ》）
        this.abilitys = [] // 能,能力（パッシブ・スキル）
        this.skills = [] // 技,技能（アクティブ・スキル）
        // プレイヤー・スキル、裏技（トリック）
        this.tactics = [] // 戦術（行動決定アルゴリズム（誰がいつ誰に対し何をするか））
    }
    
}
