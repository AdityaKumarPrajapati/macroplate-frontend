import tradImg from '/images/trad-1.png';
import hpImg from '/images/hp-1.png';
import paleoImg from '/images/paleo-meal-plan2.png';
import paleoLiteImg from '/images/paleoLite-meal-plan2.png';
import vegImg from '/images/veg-meal-plan2.png';

export interface MealPlan {
    header: string;
    desc: string;
    mealImg: string;
    lunch: {
        Protein: string;
        Carbs: string;
        Fat: string;
        Calories: string;
    };
    breakfast: {
        Protein: string;
        Carbs: string;
        Fat: string;
        Calories: string;
    };
    dataValue: string;
}

export const MealPlanContent: Record<string, MealPlan> = {
    traditional: {
        header: 'Traditional',
        desc: 'A balanced amount of carbohydrates, lean protein and healthy fats. If you’re on maintenance mode or just looking for a fresh, healthy meal plan to keep your body fueled, this plan is for you.',
        mealImg: tradImg,
        lunch: { Protein: '32g', Carbs: '50g', Fat: '16g', Calories: '472' },
        breakfast: { Protein: '25g', Carbs: '42g', Fat: '18g', Calories: '430' },
        dataValue: 'trad'
    },
    highProtein: {
        header: 'High Protein',
        desc: "If you're interested in reducing carbs but not eliminating them completely, then this plan is for you. This plan provides high protein meals with just the right amount of carbs to keep you energized for your workouts, while still keeping you lean.",
        mealImg: hpImg,
        lunch: { Protein: '48g', Carbs: '28g', Fat: '18g', Calories: '466' },
        breakfast: { Protein: '33g', Carbs: '27g', Fat: '24g', Calories: '453' },
        dataValue: 'hp'
    },
    paleo: {
        header: 'Paleo',
        desc: "Our most recommended plan for weight loss, this plan excludes grains, wheat, legumes and dairy leaving you with fibrous vegetables, lean proteins and healthy fats.",
        mealImg: paleoImg,
        lunch: { Protein: '42g', Carbs: '15g', Fat: '18g', Calories: '390' },
        breakfast: { Protein: '35g', Carbs: '19g', Fat: '23g', Calories: '423' },
        dataValue: 'paleo'
    },
    paleoLite: {
        header: 'Paleo Lite',
        desc: "Similar to our Paleo plan, this plan is designed to aid weight loss goals while providing low calorie, protein-focused meals to keep you full throughout the day.",
        mealImg: paleoLiteImg,
        lunch: { Protein: '28g', Carbs: '15g', Fat: '15g', Calories: '307' },
        breakfast: { Protein: '28g', Carbs: '19g', Fat: '26g', Calories: '422' },
        dataValue: 'paleolite'
    },
    vegetarian: {
        header: 'Vegetarian',
        desc: "If you're looking for plant-based nutrition, try our vegetarian option. This plan includes balanced macronutrient content, with legumes, tofu, tempeh, and eggs as the primary protein sources.",
        mealImg: vegImg,
        lunch: { Protein: '31g', Carbs: '42g', Fat: '23g', Calories: '472' },
        breakfast: { Protein: '31g', Carbs: '42g', Fat: '23g', Calories: '455' },
        dataValue: 'vegetarian'
    }
};
