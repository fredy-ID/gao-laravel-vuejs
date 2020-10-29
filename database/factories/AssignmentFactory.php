<?php

namespace Database\Factories;

use App\Models\Assignment;
use Illuminate\Database\Eloquent\Factories\Factory;

class AssignmentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Assignment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'date' => $this->faker->date('2020-10-29'),
            'time' => $this->faker->time('H:00:00'),
            'client_id' => $this->faker->numberBetween(1, 5),
            'computer_id' => $this->faker->numberBetween(1, 4),
        ];
    }
}
